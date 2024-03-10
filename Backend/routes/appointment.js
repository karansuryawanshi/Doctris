const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointments");
const Patient = require("../models/Patient");
const passport = require("passport");
const { createToken } = require("../utils/jwtHelper");
const fetchuser = require("../utils/fetchUser");

router.use(express.json());

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    console.log("**********************", currentUser);

    const {
      patientName,
      department,
      doctorFirstname,
      doctorLastname,
      email,
      phoneNo,
      comment,
    } = req.body;

    const doctor = await Doctor.findOne({
      firstname: doctorFirstname,
      lastname: doctorLastname,
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const doctorId = doctor._id;

    const newData = {
      patientName,
      department,
      doctorFirstname,
      doctorLastname,
      email,
      phoneNo,
      comment,
      patient: currentUser,
      doctor: doctorId,
    };
    const doctorData = await Appointment.create(newData);
    console.log(doctorData);
    return res.status(200).json(doctorData);
  }
);

router.get(
  "/get/appointment",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const allDoctor = await Appointment.find({}).populate("doctor", "patient");
    return res.status(200).json({ data: allDoctor });
  }
);

router.delete(
  "/deleteappointment/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.params.id;

    let deleteappointment = await Appointment.findById(currentUser);

    let deletedAppointment = await Appointment.findByIdAndDelete(currentUser);
    res.json({
      Success: "Note Has Been Deleted",
      deletedAppointment: deletedAppointment,
    });
  }
);

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
    // console.log("******* Appointment ***********", appointment);
    // if (
    //   !playlist.owner.equals(currentUser._id) &&
    //   !playlist.collaborators.includes(currentUser._id)
    // ) {
    //   return res.status(400).json({ err: "Not allowed" });
    // }

    // // Step 3 :- check of the song is valid
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

module.exports = router;
