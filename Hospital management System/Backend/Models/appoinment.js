const mongoose = require("mongoose");

const appoinmentSchema = new mongoose.Schema({
    patient : String,
    doctor : String,  
}, {timestamps : true});

const AppoinmentModel = mongoose.model("appoinments", appoinmentSchema);

module.exports = AppoinmentModel;