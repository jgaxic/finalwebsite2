const mongoose = require("mongoose");
const connectlogin = mongoose.connect("mongodb://127.0.0.1:27017/hotel");


//chech database connect or not

connectlogin.then(() => {
    console.log("Databases hotel connected Successfully")
})
.catch(error => {
    console.error("Databases cannot be connected" , error);
})
const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection= new mongoose.model("user", LoginSchema);

module.exports = collection;


