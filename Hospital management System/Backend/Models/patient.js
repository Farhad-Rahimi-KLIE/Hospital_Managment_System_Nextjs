const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    name : String,
    age  : Number,
    gender : String,  
});

const PatientModel = mongoose.model("patient", PatientSchema);

module.exports = PatientModel;