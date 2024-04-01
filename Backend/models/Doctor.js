// Step:1 :- Require Mongoose
const mongoose = require("mongoose");

const Doctor = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  specialist: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    private: true,
  },
  doctorPhoto: {
    type: String,
    require: false,
  },
  acceptedAppointment: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Appointment",
    },
  ],
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: "Patient",
  },
});

const DoctorModel = mongoose.model("Doctor", Doctor);

module.exports = DoctorModel;
