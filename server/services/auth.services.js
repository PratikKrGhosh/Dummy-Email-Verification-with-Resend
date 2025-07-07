import db from "../config/db.js";
import * as tables from "../drizzle/schema.js";

export const createNewUser = async (data) => {
  try {
    const [user] = await db.insert(tables.usersTable).values(data);
    return user;
  } catch (err) {
    return null;
  }
};
