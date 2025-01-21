import { ObjectId } from "mongodb";
import { db } from "../config";
import { z } from "zod";

const Iuser = z.object({
  id: z.instanceof(ObjectId),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5, "Password must be at least 5 characters long"),
});

export type UserType = z.infer<typeof Iuser>;

export default class User {
  static async create(data: UserType) {}
}
