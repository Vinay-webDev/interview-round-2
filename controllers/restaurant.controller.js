import Restaurant from "../model/Restaurant.js";


export const createRestaurant = async(req, res) => {
    try {
        const { name, location } = req.body;

        if(!name || !location) return res.status(400).json("please enter required fields");

        const restaurant = Restaurant.create({ name, location });
        res.status(201).json({restaurant, message:"restaurant added"});
    } catch(error) {
        console.log("error in createRestaurant controller");
    }
}

export const deleteRestaurant = async(req, res) => {
    try{    const { name, location } = req.body;
        if(!name || !location) return res.status(400).json("please enter required fields");
        await Restaurant.findOneAndDelete({ name, location });
        res.status(200).json("restaurant deleted");
    } catch(error) {
        console.log("error in deleteRestaurant controller");
    }
}

export const getAllRestaurant = async(req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.json({ restaurants });
    } catch(error) {
        console.log("error in getAllRestaurant controller", error.message);
    }
}

export const updateRestaurant = async(req, res) => {
    try{
        const { name, location, newName, newLocation } = req.body;
        if(!name || !location) return res.status(400).json("please enter required fields");
        const updatedRestaurant = await Restaurant.findOneAndUpdate(
            { name, location },
            {name: newName, location: newLocation},
        );
        res.json(updatedRestaurant);
    } catch(error) {
        console.log("error in updateRestaurant controller");
    }

}