import express from "express";
import UserRepositoryImpl from "@/repositories/UserRepositoryImpl";

const router: express.Router = express.Router();

/* GET */
router.get("/", async (req: express.Request, res: express.Response) => {
  const userRepository = new UserRepositoryImpl();
  const user = await userRepository.findById(1);
  res.send(user);
});

/* POST */
router.post("/", (req: express.Request, res: express.Response) => {
  res.send("post api is running");
});

export default router;
