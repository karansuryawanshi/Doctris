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

// register Patient
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
    prescription,
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
    prescription,
  };

  const patientData = await Patient.create(newData);

  const token = await getToken(patientData._id);

  const userToReturn = {
    ...patientData.toJSON(),
    token,
  };
  // console.log(userToReturn);

  return res.status(200).json(userToReturn);
});

// login Patient
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

  // if (!user.id) {
  //    "Invalid credential";
  // }

  const token = await getToken(user._id);

  // console.log(token);
  const userToReturn = { ...user.toJSON(), token };
  return res.status(200).json(userToReturn);
});

router.put(
  "/uploadprescription/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const userId = req.params.id; // Get the ID from the request URL
      const { prescription } = req.body; // Extract the prescription from the request body

      // Find the patient by the provided userId
      let patientData = await Patient.findById(userId);
      if (!patientData) {
        return res.status(404).send("Patient not found");
      }

      // Update the prescription for the specific patient
      const updatedData = {
        prescription,
      };

      const updatedPatient = await Patient.findByIdAndUpdate(
        userId,
        { $set: updatedData },
        { new: true } // Return the updated document
      );

      return res.status(200).json(updatedPatient);
    } catch (error) {
      console.error("Error updating prescription:", error);
      return res.status(500).send("Server error");
    }
  }
);

// Edit details
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
      patientPhoto,
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
    if (patientPhoto) {
      newPatient.patientPhoto = patientPhoto;
    }

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

// Get Patient details
router.get(
  "/get/patient/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user._id;
    const userDetails = await Patient.find({ _id: currentUser });
    return res.status(200).json({ data: userDetails });
  }
);

// Search doctor name by city
router.get(
  "/get/doctorcity/:cityname",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { cityname } = req.params;
    const details = await Doctor.find({ city: cityname });
    return res.status(200).json({ data: details });
  }
);
module.exports = router;
