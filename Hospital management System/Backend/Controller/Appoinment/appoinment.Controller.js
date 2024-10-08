const Appoinment = require("../../Models/appoinment")
class AppoinmentController {
    static addAppoinment = async (req, res) => {
        const { patient, doctor } = req.body;
        try {
                const addproperty = await Appoinment.create({
                    patient: patient,
                    doctor : doctor,
                })
                if (addproperty) {
                    return res.status(200).json({ message: "Appoinment Added Successfully", addproperty })
                }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    static GetAppoinment = async (req, res) => {
        try {
            const getAllProperty = await Appoinment.find({});
            if (getAllProperty) {
                return res.status(200).json({ message: "All Appoinment Fetch it", getAllProperty })
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    static DeleteAppoinment = async (req, res) => {
        const id = req.params.id;
        try {
            const propertyDelete = await Appoinment.findByIdAndDelete({ _id: id });
            return res.status(200).json({
                message: "Appoinment Deleted Successfully", propertyDelete
            });
        } catch (error) {
            res.status(501).json({
                message: error.message
            })
        }
    }
}

module.exports = AppoinmentController;