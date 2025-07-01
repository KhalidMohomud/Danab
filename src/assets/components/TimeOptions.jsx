// TimeOptions.jsx
import React from "react";
import { TfiTimer } from "react-icons/tfi";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimeOptions = ({ selectedAmount, selectTime }) => {
  const isActiveTime = (amount) => selectedAmount === amount;

  const times = [
    {
      label: "1 Saac",
      amount: "$0.50",
      icon: <TfiTimer className="text-pink-500 h-12 w-12 mx-auto mb-2 " />,
    },
    {
      label: "Unlimited",
      amount: "$1.00",
      icon: null,
    },
  ];

  return (
    <div className="flex justify-between mt-6 gap-3">
      {times.map((time, idx) => (
        <div
          key={idx}
          onClick={() => selectTime(time.amount)}
          className={`flex-1 relative text-center rounded-xl p-4 cursor-pointer shadow hover:scale-105 transition ${
            isActiveTime(time.amount)
              ? "border-2 border-pink-500 bg-white dark:bg-gray-700 active-time"
              : "bg-gray-100 dark:bg-gray-600"
          }`}
        >
          {time.icon && time.icon}
          <p
            className={`text-base font-bold ${
              isActiveTime(time.amount) ? "text-pink-500" : ""
            }`}
          >
            {time.label}
          </p>
          <p
            className={`text-sm ${
              isActiveTime(time.amount)
                ? "text-pink-400"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {time.amount}
          </p>
          {isActiveTime(time.amount) && (
            <div className="absolute top-1 right-1 w-5 h-5 rounded-full border border-pink-500 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-pink-500 text-xs"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimeOptions;
