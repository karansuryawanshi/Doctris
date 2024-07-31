const express = require("express");
const app = express();
const port = 8000;

const Patient = require("./models/Patient");
const Doctor = require("./models/Doctor");

const PatientAuth = require("./routes/patient");
const DoctorAuth = require("./routes/doctor");
const Appointment = require("./routes/appointment");
const socket = require("./routes/socket");

const mongoose = require("mongoose");

const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const cors = require("cors");

app.use(cors());

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "ThisKeyIsSupposeToBeSecret";

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/Appointment?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Mongo!");
  });

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    const patientUser = await Patient.findOne({ _id: jwt_payload.identifier });
    const doctorUser = await Doctor.findOne({ _id: jwt_payload.identifier });

    if (patientUser || doctorUser) {
      return done(null, patientUser || doctorUser);
    } else {
      return done(null, false);
    }
  })
);

app.use(passport.initialize());

app.use("/auth", PatientAuth);
app.use("/doctorauth", DoctorAuth);
app.use("/appointment", Appointment);

app.get("/", (req, res) => {
  res.send("Hello Buddy");
});

app.listen(port, () => {
  console.log("app is running on: " + port);
});

app.use(express.json());

app.post("/stripe-checkout-session", async (req, res) => {
  const { products, email, address, time, amount, date, logo } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: products,
            description: `
              Doctor Name: ${products}
              Email: ${email} 
              Address: ${address} 
              Appointment Time: ${time} 
              Amount: $${amount} 
              Date: ${date}
              `,
            images: [`${logo}`],
          },
          unit_amount: 1000 * 20, // Amount in cents
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5173/patient/success",
    cancel_url: "http://localhost:5173/patient/cancel",
  });
  console.log("This is session", session.id);

  res.json({ id: session.id });
});
