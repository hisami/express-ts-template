import User from "@entities/User";

export default interface UserRepository {
  findById(id: number): Promise<User | undefined>;
}
