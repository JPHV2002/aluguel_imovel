import { User } from "../../../entities/User";
import { UserMongo } from "../../../models/User";
import { IUsersRepository } from "../../IUsersRepository";

export class MongoUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    return await UserMongo.findOne({ email: email });
  }
  async save(user: User): Promise<void> {
    const userMongo = new UserMongo(user);
    userMongo.save();
    return;
  }
}
