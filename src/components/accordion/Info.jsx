/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Info = ({ id, title, info, sub_title, start_date, end_date }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="h-full flex-wrap basis-0 flex mb-2 border-0 border-b-2 border-solid border-black relative">
      <div
        className={`${id === 1 ? "border-0" : "accordion-border"} w-full mr-6`}
      >
        <p className="flex justify-between relative items-center m-auto w-full pl-6">
          <span className="items-center text-[21px] font-bold py-[30px]">
            {title}
          </span>
        </p>
        {expanded && (
          <div className="pr-[50px] pl-[30px]">
            <span className="flex items-center justify-between">
              <p className="text-[28px] caveat leading-10 font-bold m-0">
                {sub_title}
              </p>
              <span className="flex items-center gap-x-1">
              <p className="text-[13px] font-bold m-0">{start_date}</p> -
              <p className={`${end_date === "PRESENT" && 'text-[#29a587]'} text-[13px] font-bold m-0`}>{end_date}</p>
              </span>

            </span>
            <p className="text-[#262626] dark:text-white relative pt-[15px] pb-[30px] leading-8">
              {info}
            </p>
          </div>
        )}
        <span
          className="absolute z-10 -bottom-6 right-0 rounded-full border-2 border-black shadowbtn"
          onClick={() => setExpanded(!expanded)}
        >
          <button
            className={`${
              expanded ? "bg-[#f0ebe3]" : "bg-white"
            } flex items-center justify-center text-2xl font-bold h-12 w-12 rounded-full`}
          >
            {expanded ? <FiMinus /> : <FiPlus />}
          </button>
        </span>
      </div>
    </article>
  );
};

export default Info;
