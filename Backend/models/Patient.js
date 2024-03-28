// Step:1 :- Require Mongoose
const mongoose = require("mongoose");

const Patient = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: false,
  },
  patientPhoto: {
    type: String,
    require: false,
  },
  age: {
    type: Number,
    require: false,
  },
  bloodGroup: {
    type: String,
    require: false,
  },
  height: {
    type: Number,
    require: false,
  },
  weight: {
    type: Number,
    require: false,
  },
  gender: {
    type: String,
    require: false,
  },
  birthDate: {
    type: String,
    require: false,
  },
  phoneNumber: {
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
  comingAppointment: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Appointment",
    },
  ],
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "Doctor",
  },
});

const PatientModel = mongoose.model("Patient", Patient);

module.exports = PatientModel;
