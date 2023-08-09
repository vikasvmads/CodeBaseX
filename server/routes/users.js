import express from "express";
import userController from "../controller/user.controller";
var router = express.Router();

/* GET users listing. */
router.get("/", userController.getAllUsers);

export default router;
