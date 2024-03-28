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

<<<<<<< HEAD
// Register Doctor
router.post("/register", async (req, res) => {
  const { firstname, lastname, email, specialist, password, doctorPhoto } =
    req.body;
=======
router.post("/register", async (req, res) => {
  const { firstname, lastname, email, specialist, password } = req.body;
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
  const user = await Doctor.findOne({ email: email });
  if (user) {
    return res
      .status(403)
      .json({ error: "A User with this mailId already exist" });
  }
  if (!firstname || !lastname || !password) {
    return res
      .status(403)
      .json({ error: "None of the above field should be Empty!" });
  }
  const newData = {
    firstname,
    lastname,
    email,
    specialist,
    password,
<<<<<<< HEAD
    doctorPhoto,
  };

  console.log("************ doctor Photo ***************", doctorPhoto);

=======
  };
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
  const doctorData = await Doctor.create(newData);
  const token = await getToken(doctorData._id);

  const userToReturn = {
    ...doctorData.toJSON(),
    token,
  };
  console.log(userToReturn);
  return res.status(200).json(userToReturn);
});

<<<<<<< HEAD
// Login Doctor
=======
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
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

  const token = await getToken(user._id);
  console.log(token);
  const userToReturn = { ...user.toJSON(), token };
  return res.status(200).json(userToReturn);
});

// get all doctor
<<<<<<< HEAD
=======

>>>>>>> 9b09324780698521db15268299768ea600dc29f5
router.get(
  "/get/doctor",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const allDoctor = await Doctor.find({});
    return res.status(200).json({ data: allDoctor });
  }
);

<<<<<<< HEAD
// Edit Details
=======
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
router.put(
  "/updateprofile/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user._id;

<<<<<<< HEAD
    const { firstname, lastname, specialist, email, doctorPhoto } = req.body;
=======
    const { firstname, lastname, specialist, email } = req.body;
>>>>>>> 9b09324780698521db15268299768ea600dc29f5

    const newDoctor = {};
    if (firstname) {
      newDoctor.firstname = firstname;
    }
    if (lastname) {
      newDoctor.lastname = lastname;
    }
    if (specialist) {
      newDoctor.specialist = specialist;
    }
    if (email) {
      newDoctor.email = email;
    }
<<<<<<< HEAD
    if (doctorPhoto) {
      newDoctor.doctorPhoto = doctorPhoto;
    }
=======
>>>>>>> 9b09324780698521db15268299768ea600dc29f5

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

module.exports = router;
