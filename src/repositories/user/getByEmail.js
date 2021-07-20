import connection from "../../config/database.js";

export async function getByEmail(email) {
  return await connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [
    email,
  ]);
}
