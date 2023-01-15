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
