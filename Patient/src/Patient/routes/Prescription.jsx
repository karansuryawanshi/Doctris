import React from "react";
import LoggedInHome from "./LoggedInHome";
import ReactStars from "react-rating-stars-component";

const Prescription = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <LoggedInHome>
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-3xl font-semibold">Rate the doctor</p>
        <div>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={46}
            activeColor="#ff2323"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">Review</p>
          <textarea
            className="border-2 w-72 h-32 p-2"
            name="Review"
            id="Review"
          />
        </div>
        <div>
          <button className="border-2 px-10 py-2 rounded-lg border-orange-500 bg-orange-500 text-white">
            Submit
          </button>
        </div>
        <div>
          <p className="cursor cursor-pointer border-2 px-4 py-2 rounded-xl bg-blue-500 border-blue-500 text-white">
            Request Prescription
          </p>
        </div>
      </div>
    </LoggedInHome>
  );
};

export default Prescription;