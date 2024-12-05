const mongoose = require("mongoose");
const {Schema} = mongoose;


const serviceSchema = new mongoose.Schema(
    {
        title: String,
        subTitle: String,
        image: String,
        isImageShow: Boolean
    }
)

module.exports = mongoose.model("service",serviceSchema);