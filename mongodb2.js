const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://127.0.0.1:27017/hotel");
connect.then(() => {
    console.log("Databases hotel connected Successfully")
})
.catch(error => {
    console.error("Databases cannot be connected" , error);
})
const HotelSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    guest: { type: Number, required: true },
    bed: {type: String, required: true},
    room: {type: String, required: true},
    CheckIn: { type: Date, required: true },
    CheckOut: { type: Date, required: true },
    Email: { type: String, required: true },
    Mobile: { type: String, required: true },
    Price: { type: String, required: true }
});
const collection1 = mongoose.model("westin", HotelSchema );
module.exports = collection1;