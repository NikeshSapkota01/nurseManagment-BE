import db from "../db";

const REFRESH_TABLE_NAME = "userToken";

export const checkForTokenInTable = (token: string) => {
  return db(REFRESH_TABLE_NAME).select().where("refresh_token", token);
};
