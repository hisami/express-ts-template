import "reflect-metadata"; // DIを行うInversifyを使用するために必要
import UserController from "@controllers/UserController";
import UserRepositoryImpl from "@repositories/UserRepositoryImpl";
import User from "@entities/User";

// リポジトリのモック化
jest.mock("@repositories/UserRepositoryImpl.ts");
const UserRepositoryImplMock = UserRepositoryImpl as jest.Mock;
const testUser: User = {
  id: 1,
  name: "name",
  age: 100,
};
UserRepositoryImplMock.mockImplementationOnce(() => {
  return {
    findById: (): User => {
      return testUser;
    },
  };
});

test("単一のユーザを取得できる", async () => {
  const userRepositoryImpl = new UserRepositoryImpl();
  const userController = new UserController(userRepositoryImpl);
  expect(await userController.find(1)).toBe(testUser);
});
