// WiFiPayment.jsx
import React, { useState } from "react";
import HeaderSection from "./HeaderSection";
import TimeOptions from "./TimeOptions";
import PaymentSection from "./PaymentSection";

const WiFiPayment = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("$0.50");
  const [selectedMethod, setSelectedMethod] = useState("EVC Plus");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const selectTime = (amount) => setSelectedAmount(amount);
  const selectMethod = (method) => setSelectedMethod(method);

  return (
    <div className={`${darkMode ? "dark dark-mode" : ""}`}>
      <div className="max-w-sm mx-auto p-5 rounded-2xl shadow-2xl bg-white dark:bg-[#1e2233] text-gray-800 dark:text-white transition-all duration-300">
        <HeaderSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <TimeOptions selectedAmount={selectedAmount} selectTime={selectTime} />
        <PaymentSection
          selectedAmount={selectedAmount}
          selectedMethod={selectedMethod}
          selectMethod={selectMethod}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default WiFiPayment;
