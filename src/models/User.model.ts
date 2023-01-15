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

export const checkForUser = (email: string) => {
  return db(TABLE_NAME).select().where("email", email);
};
