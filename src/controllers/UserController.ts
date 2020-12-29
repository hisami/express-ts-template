import express from "express";
import { inject } from "inversify";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
  requestParam,
  requestBody,
} from "inversify-express-utils";
import User from "@entities/User";
import UserRepository from "@repositories/UserRepository";

@controller("/users")
export default class UserController implements interfaces.Controller {
  private userRepository: UserRepository;

  // リポジトリをコンストラクタで注入（DI）
  constructor(@inject("UserRepository") userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  // 全てのユーザを取得
  @httpGet("/")
  async find(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  // 単一のユーザを取得
  @httpGet("/:id")
  async findById(@requestParam("id") id: number): Promise<User | undefined> {
    const user = await this.userRepository.findById(id);
    // ユーザが見つからなかった時
    if (user == null) {
      express.response.status(404).json({ error: "not found" });
    }
    return user;
  }

  // ユーザを作成
  @httpPost("/")
  async create(@requestBody() user: User): Promise<User> {
    const createdUser = await this.userRepository.create(user);
    return createdUser;
  }

  // ユーザを更新
  @httpPut("/:id")
  async update(
    @requestParam("id") id: number,
    @requestBody() user: User
  ): Promise<User | undefined> {
    const updatedUser = await this.userRepository.update(id, user);
    // ユーザが見つからなかった時
    if (updatedUser == null) {
      express.response.status(404).json({ error: "not found" });
    }
    return updatedUser;
  }

  // ユーザを削除
  @httpDelete("/:id")
  async remove(@requestParam("id") id: number): Promise<User | undefined> {
    const deletedUser = await this.userRepository.remove(id);
    // ユーザが見つからなかった時
    if (deletedUser == null) {
      express.response.status(404).json({ error: "not found" });
    }
    return deletedUser;
  }
}
