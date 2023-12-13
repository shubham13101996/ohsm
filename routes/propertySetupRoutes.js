import express from "express";
import { propertySetupController } from "../controllers/propertySetupControllers.js";
const router = express.Router();
router.post("/setup", propertySetupController);


export default router;
