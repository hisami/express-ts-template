import express from "express";
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";
import { getConnectionOptions, createConnection, BaseEntity } from "typeorm";

const main = async () => {
  const app: express.Express = createExpressServer({
    routePrefix: "/api",
    controllers: [UserController],
  });

  // TypeORMの設定
  const connectionOptions = await getConnectionOptions();
  const connection = await createConnection(connectionOptions);
  BaseEntity.useConnection(connection); // ActiveRecordパターンで使用

  // 3000番ポートでサーバ起動
  app.listen(3000, () => {
    console.log("listening on port 3000!");
  });
};

main();
