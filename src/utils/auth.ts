import jwt from "jsonwebtoken";

export const generateAccessToken = (data: { id: number; email: string }) => {
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1hr",
  });
};

export const generateRefreshToken = (data: { id: number; email: string }) => {
  return jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "3d",
  });
};

export const isTokenExpired = async (token: string) => {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    throw new Error("jwt expired");
  }
};
