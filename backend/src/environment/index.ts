import dotenv from "dotenv";

dotenv.config()
export const dbUser = process.env.DB_USER || "";
export const dbPassword = process.env.DB_PASSWORD || "";