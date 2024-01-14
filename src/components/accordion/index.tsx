import React from "react";
import education, { experience } from "./data";
import SingleItem from "./Info";

export default function Education() {

  return (
    <>
      <div className="w-full ">
        <div className="container mx-auto flex flex-col">

          <div className="w-full">
            {education.map((item) => (
              <SingleItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const Experience = () => {
  return (
    <>
      <div className="w-full ">
        <div className="container mx-auto flex flex-col">

          <div className="w-full">
            {experience.map((item) => (
              <SingleItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}