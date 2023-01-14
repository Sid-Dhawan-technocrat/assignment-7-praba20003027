const express = require('express');


var cityController = require('../Controllers/City');
var mealTypeController = require('../Controllers/MealType');
var restaurantController = require('../Controllers/Restaurant');

 
const router = express.Router();


router.get('/cityList', cityController.getCityList);
router.get('/getRestaurantsbycity', restaurantController.getRestaurantByCity);
router.get('/mealtype', mealTypeController.getMealType);
router.get('/getResById/:resId', restaurantController.getRestaurantById);

module.exports = router;