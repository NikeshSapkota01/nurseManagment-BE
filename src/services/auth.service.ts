import bcrypt from "bcryptjs";
import { Request } from "express";

import * as UserModel from "@models/User.model";
import * as AuthModel from "@models/Auth.model";

import * as AuthUtils from "@utils/auth";

/**
 * Check refresh token in database,
 * if refresh token does not exist throw an error,
 * else extract the user details from the refresh token,
 * if mathces then  and generate new access token and send to user
 *
 * @param {Request} req
 * @returns Promise
 */
export async function checkForTokenInTable(req: Request) {
  const { refreshToken } = req.body;

  const token = await AuthModel.checkForRefreshToken(refreshToken);

  if (!token?.refresh_token) return Promise.reject({ status: 403 });

  const isValidToken: any = await AuthUtils.isTokenExpired(token.refresh_token);

  const { id, email } = isValidToken;
  const accessToken = await AuthUtils.generateAccessToken({ id, email });

  return { accessToken };
}

/**
 * When user login by providing the username and password,
 * check if user exists
 * thrown error if user doesn't exists
 * validate password of user
 * if match then create both token
 * 1. authorize_token: token
 * 2. refresh_token: refreshToken
 * and send it back to front end
 *
 * @param {Request} req
 * @returns Promise
 *
 */
export async function checkForUser(req: Request) {
  const { email, password } = req.body;
  const user = await UserModel.checkForUser(email);

  if (!user) {
    return Promise.reject({
      status: 401,
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return Promise.reject({
      status: 401,
    });

  const { id } = user;

  const accessToken = AuthUtils.generateAccessToken({ id, email });
  const refreshToken = AuthUtils.generateRefreshToken({ id, email });

  const refreshTokenExists = await AuthModel.findRefreshTokenByUserId(id);

  if (refreshTokenExists?.length > 0) {
    await AuthModel.updateRefreshToken(id, refreshToken);
  } else {
    await AuthModel.insertRefreshToken(id, refreshToken);
  }

  return { accessToken, refreshToken };
}
