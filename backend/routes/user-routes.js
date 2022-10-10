import express from 'express';
import { getAllUser, login, signup } from '../controllers/user-controller';

const router = express.Router();

router.get("/", getAllUser);
router.get("/signup", signup);
router.post("/login", login)
export default router;