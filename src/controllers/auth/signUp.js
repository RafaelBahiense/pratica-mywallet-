import bcrypt from "bcrypt";

import connection from "../../config/database.js";
import { userRepository } from "../../repositories/user";

export async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(400);
    }

    const existingUserWithGivenEmail = await userRepository.getByEmail(email);

    if (existingUserWithGivenEmail.rows[0]) {
      return res.sendStatus(409);
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    userRepository.add(name, email, hashedPassword);

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
