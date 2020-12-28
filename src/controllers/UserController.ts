import { JsonController, Param, Body, Get, Post } from "routing-controllers";
import User from "@entities/User";
import UserRepositoryImpl from "@repositories/UserRepositoryImpl";

@JsonController("/users")
export class UserController {
  @Get("/:id")
  async find(@Param("id") id: number): Promise<User | undefined> {
    const userRepository = new UserRepositoryImpl();
    const user = await userRepository.findById(id);
    return user;
  }

  @Post("/")
  post(@Body() user: User): string {
    console.log(user);
    return "ok";
  }
}
