import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { userRepository } from "../../repositories/user";

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const user = await userRepository.getByEmail(email);

    if (!user.rows[0] || !bcrypt.compareSync(password, user.rows[0].password)) {
      return res.sendStatus(401);
    }

    const token = jwt.sign(
      {
        id: user.rows[0].id,
      },
      process.env.JWT_SECRET
    );

    res.send({
      token,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
