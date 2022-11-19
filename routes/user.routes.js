import express from "express";
import controller from '../controllers/index.js';
const router = express.Router();

router.get('/', controller.user.getAll);

router.use('/users', router);

export default router;