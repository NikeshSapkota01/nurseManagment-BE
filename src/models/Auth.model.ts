import db from "../db";

const TABLE_NAME = "userToken";

export const checkForRefreshToken = (refreshToken: string) => {
  return db(TABLE_NAME).select().where("refresh_token", refreshToken);
};

export const findRefreshTokenByUserId = (id: number) => {
  return db(TABLE_NAME).select().where("user_id", id);
};

export const insertRefreshToken = (id: number, refreshToken: string) => {
  return db(TABLE_NAME).insert({
    user_id: id,
    refresh_token: refreshToken,
  });
};

export const updateRefreshToken = (id: number, refreshToken: string) => {
  return db(TABLE_NAME)
    .select()
    .where("user_id", id)
    .update({ user_id: id, refresh_token: refreshToken });
};
