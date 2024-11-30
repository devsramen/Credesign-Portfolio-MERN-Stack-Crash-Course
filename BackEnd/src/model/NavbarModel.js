const mongoose = require("mongoose");
const {Schema} = mongoose;


const NavbarSchema = new mongoose.Schema(
    {
        menuItem: String,
        buttonText: String,
        buttonShow: Boolean,
        image: String
    }
)

module.exports = mongoose.model("Navbar",NavbarSchema);