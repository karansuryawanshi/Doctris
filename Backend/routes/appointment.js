const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointments");
const Patient = require("../models/Patient");
const passport = require("passport");
const { createToken } = require("../utils/jwtHelper");
const fetchuser = require("../utils/fetchUser");

router.use(express.json());
// create appointment
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    console.log("**********************", currentUser);

    const {
      patientName,
      department,
      doctorName,
      email,
      date,
      time,
      mode,
      phoneNo,
      comment,
      address,
    } = req.body;

    const doctor = await Doctor.findOne({
      name: doctorName,
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const doctorId = doctor._id;

    const newData = {
      patientName,
      department,
      doctorName,
      email,
      date,
      time,
      mode,
      phoneNo,
      comment,
      address,
      patient: currentUser,
      doctor: doctorId,
    };
    const doctorData = await Appointment.create(newData);
    console.log("Doctor Data", doctorData);
    return res.status(200).json(doctorData);
  }
);

// get appointment Details
router.get(
  "/get/appointment/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user._id;
    // console.log("*******currentuser******", currentUser);
    // _id: currentUser
    const allDoctor = await Appointment.find({
      doctor: currentUser,
    }).populate("patient");
    return res.status(200).json({ data: allDoctor });
  }
);

// Reject Appointment
router.delete(
  "/deleteappointment/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.params.id;
    console.log(currentUser);
    let deleteappointment = await Appointment.findById(currentUser);

    let deletedAppointment = await Appointment.findByIdAndDelete(currentUser);
    res.json({
      Success: "Note Has Been Deleted",
      deletedAppointment: deletedAppointment,
    });
  }
);

// Accept Appointment
router.post(
  "/accept/appointment",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { appointmentId, patientId, doctorId } = req.body;
    // console.log("**************** Hello Buddy ***************");
    const appointment = await Appointment.findOne({
      _id: appointmentId,
    });
    if (!appointment) {
      return res.status(301).json({ err: "Playlist Does not exist" });
    }
    const patient = await Patient.findOne({ _id: patientId });
    if (!patient) {
      return res.status(304).json({ err: "Not Allowed" });
    }
    // console.log("******* Patient ***********", patient);

    const doctor = await Doctor.findOne({ _id: doctorId });
    if (!doctor) {
      return res.json({ err: "Not Allowed" });
    }
    // // step 4 :- push the song in playlist
    patient.comingAppointment.push(patientId);
    await patient.save();

    doctor.acceptedAppointment.push(doctorId);
    await doctor.save();

    return res.status(200).json({ doctor, patient });
  }
);

// get blog made by me
router.get(
  "/my/appointment",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const createrId = req.user._id;
    console.log(createrId);

    const appointment = await Appointment.find({
      patient: createrId,
    }).populate("patient", "doctor");
    console.log(appointment);
    return res.status(200).json({ appointment });
    // res.send("Hello Buddy");
  }
);

router.get(
  "/get/all/patient",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const createrId = req.user._id;
    console.log(createrId);

    const appointment = await Appointment.find({
      doctor: createrId,
    }).populate("patient");
    console.log(appointment);
    return res.status(200).json({ appointment });
    res.send("Hello Buddy");
  }
);

router.get(
  "/get/patient/byid/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const id = req.params.id;
    // const currentUser = req.user._id;
    const userDetails = await Appointment.find({ _id: id }).populate("patient");
    return res.status(200).json({ data: userDetails });
  }
);

module.exports = router;
