import connection from "../../config/database.js";

export async function get(id) {
  return await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [id]
  );
}
