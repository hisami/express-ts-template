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

  // 全てのユーザを取得
  public async find(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  // 単一のユーザを取得
  public async findById(id: number): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { id: id } });
    return user;
  }

  // ユーザを作成
  public async create(user: User): Promise<User> {
    const createdUser = await this.repository.save({
      name: user.name,
      age: user.age,
    });
    return createdUser;
  }

  // ユーザを更新
  public async update(id: number, user: User): Promise<User | undefined> {
    const targetUser = await this.repository.findOne({ where: { id: id } });
    if (!targetUser) {
      return undefined;
    }
    const updatedUser = await this.repository.save({
      ...targetUser,
      name: user.name,
      age: user.age,
    });
    return updatedUser;
  }

  // ユーザを削除
  public async remove(id: number): Promise<User | undefined> {
    const targetUser = await this.repository.findOne({ where: { id: id } });
    if (!targetUser) {
      return undefined;
    }
    const removedUser = await this.repository.remove(targetUser);
    return removedUser;
  }
}
