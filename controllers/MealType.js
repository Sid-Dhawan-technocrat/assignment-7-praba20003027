const MealType = require('../Models/MealType.json');  

exports.getMealType = (req, res, next) => {
    res.status(200).json({ message: "MealType Fetched Sucessfully", mealtype: MealType })
}