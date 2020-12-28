import { injectable } from "inversify";

import User from "@entities/User";
import UserRepository from "./UserRepository";

@injectable()
export default class UserRepositoryImpl implements UserRepository {
  public async findById(id: number): Promise<User | undefined> {
    const user = await User.findOne({ where: { id: id } });
    return user;
  }
}
