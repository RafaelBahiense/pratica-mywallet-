import jwt from "jsonwebtoken";

import { financialEventsRepository } from "../../repositories/financialEvents";

export async function get(req, res) {
  try {
    const authorization = req.headers.authorization || "";
    const token = authorization.split("Bearer ")[1];

    if (!token) {
      return res.sendStatus(401);
    }

    let user;

    try {
      user = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return res.sendStatus(401);
    }

    const events = await financialEventsRepository.get(user.id);

    res.send(events.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
