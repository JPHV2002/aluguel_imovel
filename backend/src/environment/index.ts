import dotenv from "dotenv";

dotenv.config()
export const dbUser = process.env.DB_USER || "jpvellenich";
export const dbPassword = process.env.DB_PASSWORD || "f6NIvSFSdF4FUy0K";
export const secret = process.env.SECRET || "asdkvonoeiivnaoienalsdkj3234dnvaoisd"