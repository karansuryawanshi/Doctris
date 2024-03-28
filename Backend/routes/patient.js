const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const { getToken } = require("../utils/helpers");
const { createToken } = require("../utils/jwtHelper");
const { json } = require("stream/consumers");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Karanisgooboy";

router.use(express.json());

<<<<<<< HEAD
// register Patient
=======
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
router.post("/register", async (req, res) => {
  const {
    firstname,
    lastname,
    age,
    height,
    weight,
    gender,
    birthDate,
    phoneNumber,
    bloodGroup,
    email,
    password,
<<<<<<< HEAD
    patientPhoto,
=======
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
  } = req.body;

  const user = await Patient.findOne({ email: email });
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
    age,
    height,
    weight,
    gender,
    birthDate,
    phoneNumber,
    bloodGroup,
    email,
    password,
<<<<<<< HEAD
    patientPhoto,
=======
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
  };

  const patientData = await Patient.create(newData);

  const token = await getToken(patientData._id);

  const userToReturn = {
    ...patientData.toJSON(),
    token,
  };
  console.log(userToReturn);

  return res.status(200).json(userToReturn);
});

<<<<<<< HEAD
// login Patient
=======
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Patient.findOne({ email: email });
  if (!user) {
    res.status(403).json({ err: "Invalid Credentials" });
  }
  // console.log(user);

  const passwordVerification = await Patient.findOne({ password: password });
  if (!passwordVerification) {
    res.status(403).json({ err: "invalid Password" });
  }

  // console.log("******* user._id ********** ", user._id);

  const token = await getToken(user.id);
  console.log(token);
  const userToReturn = { ...user.toJSON(), token };
  return res.status(200).json(userToReturn);
});

<<<<<<< HEAD
// Edit details
=======
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
router.put(
  "/updateprofile/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user._id;

    const {
      firstname,
      lastname,
      age,
      height,
      weight,
      gender,
      birthDate,
      phoneNumber,
      bloodGroup,
      email,
<<<<<<< HEAD
      patientPhoto,
=======
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
    } = req.body;

    const newPatient = {};
    if (firstname) {
      newPatient.firstname = firstname;
    }
    if (lastname) {
      newPatient.lastname = lastname;
    }
    if (email) {
      newPatient.email = email;
    }
    if (age) {
      newPatient.age = age;
    }
    if (height) {
      newPatient.height = height;
    }
    if (weight) {
      newPatient.weight = weight;
    }
    if (gender) {
      newPatient.gender = gender;
    }
    if (birthDate) {
      newPatient.birthDate = birthDate;
    }
    if (phoneNumber) {
      newPatient.phoneNumber = phoneNumber;
    }
    if (bloodGroup) {
      newPatient.bloodGroup = bloodGroup;
    }
<<<<<<< HEAD
    if (patientPhoto) {
      newPatient.patientPhoto = patientPhoto;
    }
=======
>>>>>>> 9b09324780698521db15268299768ea600dc29f5

    //   //find the note to be updated
    let patientData = await Patient.findById(currentUser);
    if (!patientData) {
      return res.status(404).send("not found");
    }

    userPatient = await Patient.findByIdAndUpdate(
      currentUser,
      { $set: newPatient },
      { new: true }
    );
    res.json({ userPatient });
  }
);

module.exports = router;
