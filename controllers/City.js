const City = require('../Models/City.json');  


exports.getCityList = (req, res) => {
    res.status(200).json({ message: "City Fetched Sucessfully", city: City })
}