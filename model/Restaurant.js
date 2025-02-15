import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "restaurant name required"]
    },
    location: {
        type: String,
        required: [true, "location required"]
    }
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;