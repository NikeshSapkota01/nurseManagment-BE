import db from "../db";
import { IUser } from "user.types";

const TABLE_NAME = "User";

export function fetchAllNurse(userId: number) {
  const result = db(TABLE_NAME).select().where("user_id", userId);
  return result;
}

export const fetchNurse = (nurseId: number) => {
  return db(TABLE_NAME).select().where("id", nurseId);
};

export const addNewNurse = (data: IUser) => {
  return db(TABLE_NAME).insert(data);
};

export const checkForNurse = async (nurseId: number) => {
  const [result] = await db(TABLE_NAME).select().where("id", nurseId);
  return result;
};

export const updateNurseById = async (data: IUser) => {
  const nurse = { ...data, updated_at: Date.now() };

  const result = await db(TABLE_NAME)
    .where("user_id", data.id)
    .update(nurse)
    .returning("*");

  return result;
};

export const deleteNurseById = async (nurseId: number, id: number) => {
  const result = await db(TABLE_NAME)
    .where("user_id", id)
    .where("id", nurseId)
    .del();

  return result;
};
