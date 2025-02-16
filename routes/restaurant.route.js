import express from 'express';
import { createRestaurant, deleteRestaurant, getAllRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";
const router = express.Router();

router.post('/create', createRestaurant);
router.delete('/delete', deleteRestaurant);
router.get('/get', getAllRestaurant);
router.put('/update', updateRestaurant);

export default router;
