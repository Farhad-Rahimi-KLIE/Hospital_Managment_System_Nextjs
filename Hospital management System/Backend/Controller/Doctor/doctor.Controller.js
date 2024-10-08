const Doctor = require("../../Models/doctor")
class DoctorController {
    static adddoctor = async (req, res) => {
        const { name, specality } = req.body;
        try {
                const addproperty = await Doctor.create({
                    name: name,
                    specality : specality,
                })
                if (addproperty) {
                    return res.status(200).json({ message: "Doctor Added Successfully", addproperty })
                }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    static Getdoctor = async (req, res) => {
        try {
            const getAllProperty = await Doctor.find({});
            if (getAllProperty) {
                return res.status(200).json({ message: "All Doctors Fetch it", getAllProperty })
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    static Deletedoctor = async (req, res) => {
        const id = req.params.id;
        try {
            const propertyDelete = await Doctor.findByIdAndDelete({ _id: id });
            return res.status(200).json({
                message: "Doctor Deleted Successfully", propertyDelete
            });
        } catch (error) {
            res.status(501).json({
                message: error.message
            })
        }
    }
}

module.exports = DoctorController;