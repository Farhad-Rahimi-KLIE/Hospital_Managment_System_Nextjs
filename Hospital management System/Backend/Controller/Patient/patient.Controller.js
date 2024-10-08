const Pateint = require("../../Models/patient")
class PatientController {
    static addpatient = async (req, res) => {
        const { name, age, gender } = req.body;
        try {
                const addproperty = await Pateint.create({
                    name: name,
                    age : age,
                    gender : gender,
                })
                if (addproperty) {
                    return res.status(200).json({ message: "Patient Added Successfully", addproperty })
                }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    static Getpatient = async (req, res) => {
        try {
            const getAllProperty = await Pateint.find({});
            if (getAllProperty) {
                return res.status(200).json({ message: "All Patient Fetch it", getAllProperty })
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    static Deletepatient = async (req, res) => {
        const id = req.params.id;
        try {
            const propertyDelete = await Pateint.findByIdAndDelete({ _id: id });
            return res.status(200).json({
                message: "Patient Deleted Successfully", propertyDelete
            });
        } catch (error) {
            res.status(501).json({
                message: error.message
            })
        }
    }
}

module.exports = PatientController;