import { injectable } from "inversify";
import { Repository, getRepository } from "typeorm";

import User from "@entities/User";
import UserRepository from "./UserRepository";

@injectable()
export default class UserRepositoryImpl implements UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async findById(id: number): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { id: id } });
    return user;
  }
}
