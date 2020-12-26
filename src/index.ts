import express from "express";
import userRouter from "@routes/user";

const app: express.Express = express();

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// リクエストの解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルーティング
app.use("/api/users", userRouter);

// 3000番ポートでサーバ起動
app.listen(3000, () => {
  console.log("listening on port 3000!");
});
