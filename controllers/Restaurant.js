const Restaurant = require('../Models/Restaurant.json');  // importing the Restaurant JSON data


exports.getRestaurantByCity = (req, res) => {
    const cityName = req.body.city;
    const result = Restaurant.filter(item => item.city == cityName);
    res.status(200).json({ message: "Restaurant Fetched Successfully", restaurantList: result })
        .catch(err => {
            res.status(500).json({ message: err })
        }
        );
}


exports.getRestaurantById = (req, res, next) => {
    const resId = req.params.resId;
    const result = Restaurant.filter(item => item._id == resId);
    res.status(200).json({ message: "Restaurant Fetched Successfully", restaurant: result })
        .catch(err => {
            res.status(500).json({ message: err })
        }
        );
}