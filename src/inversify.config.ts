import { Container } from "inversify";

import UserRepository from "@repositories/UserRepository";
import UserRepositoryImpl from "@repositories/UserRepositoryImpl";

const container = new Container();
container.bind<UserRepository>("UserRepository").to(UserRepositoryImpl);

export default container;
