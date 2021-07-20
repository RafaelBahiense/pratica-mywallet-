import jwt from "jsonwebtoken";

import { financialEventsRepository } from "../../repositories/financialEvents";

export async function sum(req, res) {
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

    const sum = events.rows.reduce(
      (total, event) =>
        event.type === "INCOME" ? total + event.value : total - event.value,
      0
    );

    res.send({ sum });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
