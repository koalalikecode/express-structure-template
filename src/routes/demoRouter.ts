/**
 * Router for handling HTTP requests related to the demo functionality.
 */
import { Router } from "express";
import DemoService from "../services/demo.service";
import Paths from "../constants/Paths";

const demoRouter = Router();

demoRouter.get(Paths.Demo.Get, DemoService.getDemoData);
export default demoRouter;
