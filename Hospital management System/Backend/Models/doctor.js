const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    name : String,
    specality  : String,
});

const DoctorModel = mongoose.model("doctors", DoctorSchema);

module.exports = DoctorModel;