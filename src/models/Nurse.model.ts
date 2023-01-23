import db from "../db";
import { INurse } from "nurse.types";

const TABLE_NAME = "Nurse";

export function fetchAllNurse(userId: number) {
  const result = db(TABLE_NAME)
    .select()
    .where("created_by", userId)
    .where("is_deleted", false);
  return result;
}

export const fetchNurse = (userId: number, nurseId: number) => {
  return db(TABLE_NAME)
    .select()
    .where("created_by", userId)
    .where("id", nurseId)
    .where("is_deleted", false);
};

export const addNewNurse = async (data: INurse) => {
  const result = await db(TABLE_NAME).insert(data).returning("*");
  return result;
};

export const checkForNurse = async (userId: number, nurseId: number) => {
  const [result] = await db(TABLE_NAME)
    .select()
    .where("created_by", userId)
    .where("id", nurseId);
  return result;
};

export const updateNurseById = async (nurseId: number, nurse: INurse) => {
  const result = await db(TABLE_NAME)
    .where("id", nurseId)
    .update(nurse)
    .returning("*");

  return result;
};

export const deleteNurseById = async (userId: number, nurseId: number) => {
  const result = await db(TABLE_NAME)
    .where("created_by", userId)
    .where("id", nurseId)
    .update("is_deleted", true);

  return result;
};
