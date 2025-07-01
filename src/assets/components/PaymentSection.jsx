// PaymentSection.jsx
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const PaymentSection = ({
  selectedAmount,
  selectedMethod,
  selectMethod,
  darkMode,
}) => {
  const isActiveMethod = (method) => selectedMethod === method;

  return (
    <>
      {/* Amount to Pay */}
      <div className="mt-6 bg-purple-100 dark:bg-purple-800 rounded-xl py-4 text-center shadow">
        <p className="text-lg font-semibold text-purple-800 dark:text-purple-200">
          Amount to Pay:
        </p>
        <p className="text-3xl font-extrabold text-purple-900 dark:text-white">
          {selectedAmount}
        </p>
      </div>

      {/* Payment Method */}
      <div className="mt-6">
        <p className="text-sm font-semibold mb-3">Habka Lacag Bixinta</p>
        <div className="grid grid-cols-4 gap-2 text-center text-xs font-medium">
          {["EVC Plus", "JEED", "ZAAD", "SAHAL"].map((method) => (
            <button
              key={method}
              onClick={() => selectMethod(method)}
              className={`px-2 py-1 rounded-full shadow-sm ${
                isActiveMethod(method)
                  ? "bg-pink-100 text-pink-800 border border-pink-400 active-method"
                  : "bg-gray-100"
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Phone Number */}
      <div className="mt-5">
        <label className="block text-sm font-semibold mb-1">
          Telefonn Numberka
        </label>
        <div className="flex items-center border rounded-xl overflow-hidden shadow-sm focus-within:ring-2 ring-pink-400">
          <span className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-200">
            <img
              src="https://flagcdn.com/w40/so.png"
              alt="SO"
              className="w-5 h-3.5 rounded-sm"
            />
            +252
          </span>
          <input
            type="number"
            className="w-full px-3 py-2 text-sm outline-none bg-transparent dark:text-white"
            placeholder="xxxxxxxxx"
          />
        </div>
        <label className="flex items-center mt-3 text-xs">
          Fadlan Gali Numberka lacagta la Dirayo
        </label>
      </div>

      <div className="mt-5">
        <input type="checkbox" className="mr-2 h-4 w-4" />
        <div className="flex flex-col relative ml-8">
          <span className="text-shadow-xs absolute bottom-6 text-gray-600 dark:text-gray-300">
            Ogolow
          </span>

          <span className="text-xs text-pink-500 font-bold underline">
            shuruudaha iyo xeerarka isticmaalka Danab
          </span>
        </div>
      </div>

      <div className="mt-5">
        <input type="checkbox" className="mr-2 h-4 w-4" />
        <span className="text-xs font-semibold">
          Qofkale shuruudaha iyo xeerarka isticmaala Danab
        </span>
      </div>

      {/* Pay Button */}
      <button className="w-full mt-5 bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-3 rounded-xl text-lg font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition">
        Bixi Hadda
        <FaLongArrowAltRight className="h-12 w-6" />
      </button>
    </>
  );
};

export default PaymentSection;
