const mongoose = require("mongoose");
const {Schema} = mongoose;


const bannerSchema = new mongoose.Schema(
    {
        subHeading: String,
        heading: String,
        paragraph: String,
        buttonText: String,
        buttonShow: Boolean,
        image: String
    }
)

module.exports = mongoose.model("banner",bannerSchema);