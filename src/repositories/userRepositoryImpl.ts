import UserRepository from "./UserRepository";
import User from "@entities/User";

export default class UserRepositoryImpl implements UserRepository {
  public async findById(id: number): Promise<User | undefined> {
    const user = await User.findOne({ where: { id: id } });
    return user;
  }
}
