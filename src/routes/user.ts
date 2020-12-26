import express from "express";

const router: express.Router = express.Router();

/* GET */
router.get("/", (req: express.Request, res: express.Response) => {
  res.send("get api is running");
});

/* POST */
router.post("/", (req: express.Request, res: express.Response) => {
  res.send("post api is running");
});

export default router;
