import "reflect-metadata"; // DIを行うInversifyを使用するために必要
import UserController from "@controllers/UserController";
import UserRepositoryImpl from "@repositories/UserRepositoryImpl";

jest.mock("@repositories/UserRepositoryImpl.ts");
const UserRepositoryImplMock = UserRepositoryImpl as jest.Mock;

test("単一のユーザを取得できる", async () => {
  const testUser = {
    id: 1,
    name: "name",
    age: 100,
  };
  UserRepositoryImplMock.mockImplementationOnce(() => {
    return {
      findById: () => {
        return testUser;
      },
    };
  });
  const userRepositoryImpl = new UserRepositoryImpl();
  const userController = new UserController(userRepositoryImpl);
  expect(await userController.find(1)).toBe(testUser);
});
