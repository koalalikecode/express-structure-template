import { Router } from "express";
import Paths from "../constants/Paths";
import userRouter from "./demoRouter";

const apiRouter = Router();

apiRouter.use(Paths.Demo.Base, userRouter);

export default apiRouter;
