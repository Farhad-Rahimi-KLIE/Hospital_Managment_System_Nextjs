const express = require("express");
const router = express.Router();
// const upload = require("../Middlewares/Image");
const AppoinmentController = require("../Controller/Appoinment/appoinment.Controller");
const DoctorController = require("../Controller/Doctor/doctor.Controller");
const PatientController = require("../Controller/Patient/patient.Controller");
// const checkuserauthecated = require('../Middlewares/authMiddlewares');

// Appoinments Routes
router.post("/addprop", AppoinmentController.addAppoinment);
router.get("/getprop", AppoinmentController.GetAppoinment);
router.delete("/deleteprop/:id", AppoinmentController.DeleteAppoinment);

// Doctors Routes
router.post("/adddoctor", DoctorController.adddoctor);
router.get("/getdoctor", DoctorController.Getdoctor);
router.delete("/deletedoctor/:id", DoctorController.Deletedoctor);

// Patients Routes
router.post("/addpatient", PatientController.addpatient);
router.get("/getpatient", PatientController.Getpatient);
router.delete("/deletepatient/:id", PatientController.Deletepatient);

module.exports = router;