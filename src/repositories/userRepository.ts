import User from "@entities/User";

export default interface UserRepository {
  // 全てのユーザを取得
  find(): Promise<User[] | []>;
  // 単一のユーザを取得
  findById(id: number): Promise<User | undefined>;
  // ユーザを作成
  create(user: User): Promise<User>;
  // ユーザを更新
  update(id: number, user: User): Promise<User | undefined>;
  // ユーザを削除
  remove(id: number): Promise<User | undefined>;
}
