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
    find: (): User[] => {
      return [testUser];
    },
    findById: (): User => {
      return testUser;
    },
    create: (): User => {
      return testUser;
    },
    update: (): User => {
      return testUser;
    },
    remove: (): User => {
      return testUser;
    },
  };
});
// モック化されたリポジトリのインスタンスを生成
const userRepositoryImpl = new UserRepositoryImpl();
// コントローラへ注入
const userController = new UserController(userRepositoryImpl);

describe("UserControllerのテスト", () => {
  test("全てのユーザを取得", async () => {
    expect(await userController.find()).toEqual([testUser]);
  });
  test("単一のユーザを取得", async () => {
    expect(await userController.findById(1)).toEqual(testUser);
  });
  test("ユーザを作成", async () => {
    expect(await userController.create(testUser)).toEqual(testUser);
  });
  test("ユーザを更新", async () => {
    expect(await userController.update(1, testUser)).toEqual(testUser);
  });
  test("ユーザを削除", async () => {
    expect(await userController.remove(1)).toEqual(testUser);
  });
});
