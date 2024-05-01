const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");
const fetchuser = require("../utils/fetchUser");

const { getToken } = require("../utils/helpers");
const { createToken } = require("../utils/jwtHelper");
const { verifyToken } = require("../utils/jwtHelper");
const { json } = require("stream/consumers");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Karanisgooboy";

router.use(express.json());

// Register Doctor
router.post("/register", async (req, res) => {
  const { name, email, specialist, password, doctorPhoto } = req.body;
  const user = await Doctor.findOne({ email: email });
  if (user) {
    return res
      .status(403)
      .json({ error: "A User with this mailId already exist" });
  }
  if (!name || !password) {
    return res
      .status(403)
      .json({ error: "None of the above field should be Empty!" });
  }
  const newData = {
    name,
    email,
    specialist,
    password,
    doctorPhoto,
  };

  console.log("************ doctor Photo ***************", doctorPhoto);

  const doctorData = await Doctor.create(newData);
  const token = await getToken(doctorData._id);

  const userToReturn = {
    ...doctorData.toJSON(),
    token,
  };
  console.log(userToReturn);
  return res.status(200).json(userToReturn);
});

// Login Doctor
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Doctor.findOne({ email: email });
  if (!user) {
    res.status(403).json({ err: "Invalid Credentials" });
  }

  const passwordVerification = await Doctor.findOne({ password: password });
  if (!passwordVerification) {
    res.status(403).json({ err: "invalid Password" });
  }

  const token = await getToken(user.id);
  console.log(token);
  const userToReturn = { ...user.toJSON(), token };
  return res.status(200).json(userToReturn);
});

// get all doctor
router.get(
  "/get/doctor",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const allDoctor = await Doctor.find({});
    return res.status(200).json({ data: allDoctor });
  }
);

// Edit Details
router.put(
  "/updateprofile/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user._id;

    const { name, specialist, email, doctorPhoto } = req.body;

    const newDoctor = {};
    if (name) {
      newDoctor.firstname = firstname;
    }
    if (specialist) {
      newDoctor.specialist = specialist;
    }
    if (email) {
      newDoctor.email = email;
    }
    if (doctorPhoto) {
      newDoctor.doctorPhoto = doctorPhoto;
    }

    //   //find the note to be updated
    let patientData = await Doctor.findById(currentUser);
    if (!patientData) {
      return res.status(404).send("not found");
    }

    userDoctor = await Doctor.findByIdAndUpdate(
      currentUser,
      { $set: newDoctor },
      { new: true }
    );
    res.json({ userDoctor });
  }
);

// get my own details
router.get(
  "/get/doctor/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user._id;
    const userDetails = await Doctor.find({ _id: currentUser });
    return res.status(200).json({ data: userDetails });
  }
);

module.exports = router;
