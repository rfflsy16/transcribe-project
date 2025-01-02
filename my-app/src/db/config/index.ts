import { Db, MongoClient } from "mongodb";

const uri: string =
  process.env.MONGODB_URI ||
  "mongodb+srv://rfflsy16:mamangGacor16@raffles.9c2dw.mongodb.net/";

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable in .env");
}

const client: MongoClient = new MongoClient(uri);
const db: Db = client.db("transcribeDB");

export { db, client };
