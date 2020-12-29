import express from "express";
import "reflect-metadata";
import { getConnectionOptions, createConnection } from "typeorm";
import { InversifyExpressServer } from "inversify-express-utils";

import container from "./inversify.config";

import "./controllers/UserController";

const main = async () => {
  // TypeORMの設定
  const connectionOptions = await getConnectionOptions();
  await createConnection(connectionOptions);

  // DIコンテナがセットされたexpressサーバ
  const server = new InversifyExpressServer(
    container,
    null,
    { rootPath: "/api" },
    express()
  );
  // リクエストボディを受け取るための設定
  server.setConfig((app) => {
    app.use(
      express.urlencoded({
        extended: true,
      })
    );
    app.use(express.json());
  });

  // 3000番ポートでサーバ起動
  server.build().listen(3000, () => {
    console.log("listening on port 3000!");
  });
};

main();
