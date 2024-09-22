import React from "react";
import { Icon } from "@iconify/react";

const Category = ({ icon, description, title }) => {
  return (
    <div>
      <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
        <Icon className="text-4xl p-1 text-blue-700" icon={icon}></Icon>
      </div>
      <div className="font-bold text-gray-700 text-xl text-dark py-4">
        {title}
      </div>
      <div className="">
        <p className="text-base text-gray-600">{description}</p>
      </div>
      <div className="py-2">
        <p className="flex items-center text-blue-700 cursor-pointer">
          Read More{" "}
          <Icon className="mx-1 mt-1" icon={"ph:arrow-right-light"}></Icon>
        </p>
      </div>
    </div>
  );
};

export default Category;
