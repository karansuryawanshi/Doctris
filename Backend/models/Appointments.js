// Step:1 :- Require Mongoose
const mongoose = require("mongoose");

const Appointment = new mongoose.Schema({
  patientName: {
    type: String,
  },
  department: {
    type: String,
    require: false,
  },
  doctorName: {
    type: String,
    require: false,
  },
  address: {
    type: String,
    require: false,
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  mode: {
    type: String,
  },
  phoneNo: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
  },
  prescription: {
    type: String,
    require: false,
  },
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: "Patient",
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "Doctor",
  },
  comingAppointment: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Appointment",
    },
  ],
});

const AppointmentModel = mongoose.model("Appointment", Appointment);

module.exports = AppointmentModel;
