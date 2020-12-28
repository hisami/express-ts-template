import { inject } from "inversify";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  requestParam,
  requestBody,
} from "inversify-express-utils";
import User from "@entities/User";
import UserRepository from "@repositories/UserRepository";

@controller("/users")
export class UserController implements interfaces.Controller {
  private userRepository: UserRepository;

  constructor(@inject("UserRepository") userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  @httpGet("/:id")
  async find(@requestParam("id") id: number): Promise<User | undefined> {
    const user = await this.userRepository.findById(id);
    return user;
  }

  @httpPost("/")
  post(@requestBody() user: User): string {
    console.log(user);
    return "ok";
  }
}
