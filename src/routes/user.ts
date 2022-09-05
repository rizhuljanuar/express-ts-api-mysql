import { Router } from "express";
import User from "../controllers/UserController";

const router = Router();
const UserController = new User();

router.get("/users", UserController.get);
router.get("/users/:id", UserController.getById);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

export default router;
