import db from "../db";
import { IUser } from "../types/user.types";

const TABLE_NAME = "User";

export function fetchAllUsers() {
  const result = db.select("id", "name", "email").from("User");
  return result;
}

export const fetchUser = (id: Number) => {
  return db(TABLE_NAME).select("id", "name", "email").where("id", id);
};

export const addNewUser = (data: IUser) => {
  return db(TABLE_NAME).insert(data);
};

export const checkForUser = async (email: string) => {
  const [result] = await db(TABLE_NAME)
    .select("id", "email", "password")
    .where("email", email);
  return result;
};
