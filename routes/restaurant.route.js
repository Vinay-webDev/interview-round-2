import express from 'express';
import { createRestaurant, deleteRestaurant } from "../controllers/restaurant.controller.js";
const router = express.Router();

router.post('/create', createRestaurant);
router.delete('/delete', deleteRestaurant);

export default router;