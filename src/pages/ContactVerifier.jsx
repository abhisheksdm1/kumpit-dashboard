import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import "../App.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

const data = {
  labels: ["Green", "Red", "Yellow"],
  datasets: [
    {
      data: [60, 25, 15], // Adjust percentages here
      backgroundColor: ["#34D399", "#F87171", "#FBBF24"], // Tailwind green-400, red-400, yellow-400
      borderWidth: 0,
    },
  ],
};

export default function ContactVerifier() {
  const [email, setEmail] = useState(null);
  const [emailToggle, setEmailToggle] = useState(0);
  const [modalToggle, setModalToggle] = useState(false);

  function handleVerify() {
    let data = JSON.parse(localStorage.getItem("email")) || [];

    // Push new value
    var regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = regex.test(email.toLowerCase());

    if (isValidEmail) {
      if (data.includes(email)) {
        setEmailToggle(3); // Already exists
      } else {
        data.push(email);
        localStorage.setItem("email", JSON.stringify(data));
        setEmailToggle(1); // Successfully added
      }
      setModalToggle(true);
    } else {
      setEmailToggle(2);
      setModalToggle(true);
      // Invalid email
    }
  }
  return (
    <div className=" p-2 md:ml-6 md:mr-6 md:h-[100vh]">
      <h1 className="pt-5 pb-5 text-3xl font-bold dark:text-white">
        Welcome Back , Jhone Doe
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
        {/* <!-- Row 1 --> */}
        <div className="md:col-span-3 bg-white dark:bg-[#444d58] p-4 shadow-md   rounded-[10px]">
          <h1 className="font-bold mt-2 mb-2 dark:text-white">
            SINGLE CONTACT VERIFIER
          </h1>
          <h1 className="font-bold dark:text-white">Name</h1>
          <input
            type="email"
            placeholder="email"
            className="border  border-gray-300 rounded-[10px] p-2 w-full mt-2 mb-2 dark:text-white"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <button
            className="w-full mt-2 mb-2 p-2 bg-[#3c72f0] rounded-[10px] text-white"
            onClick={handleVerify}
          >
            VERIFY
          </button>
        </div>
        <div className="  md:col-span-2  bg-white  dark:bg-[#444d58] p-4 shadow-md   rounded-[10px]">
          <h1 className="font-bold mt-2 mb-2 dark:text-white">CREDITS</h1>
          <div className="text-lg text-gray-700 mb-3 mt-2 flex justify-between items-center">
            <span className="text-md    dark:text-white">Remaining: </span>
            <span className="font-bold text-xl dark:text-white">12,500</span>
          </div>
          <div className=" text-gray-700 mb-3 mt-2 flex justify-between items-center">
            <span className="text-md dark:text-white">Used: </span>
            <span className="font-bold text-xl dark:text-white">7.500</span>
          </div>
          <button className="w-full bg-[#3c72f0] text-white py-2 rounded-[10px] hover:bg-[#2f5fd6] mt-2 mb-2">
            BUY MORE
          </button>
        </div>

        {/* <!-- Row 2 --> */}
        <div className="md:col-span-3 bg-white dark:bg-[#444d58] p-4 shadow-md   rounded-[10px]">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              <h1 className="font-bold mt-2 mb-2 dark:text-white">
                BULK CONTACT VERIFIER
              </h1>
              <label className="flex items-center gap-2 px-4 py-2 border dark:text-white border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 text-sm font-medium text-gray-700">
                <IoCloudUploadOutline /> Upload CSV or TXT
                <input
                  type="file"
                  accept=".csv,.txt"
                  className="hidden dark:text-white"
                />
              </label>
              <div className="flex justify-between items-center mt-1 mb-1">
                <h1 className="dark:text-white">contact.csv</h1>
                <h1 className="dark:text-white">45%</h1>
              </div>
              <div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="90"
                  className="w-full h-2 bg-blue-500 rounded-lg no-thumb"
                />
              </div>
              <div className="">
                <a href="#" className="flex items-center justify-start">
                  <IoMdDownload className="mr-1 text-blue-600 dark:text-white" />{" "}
                  <span className="text-blue-600 dark:text-white">
                    Download Result
                  </span>
                </a>
              </div>
            </div>
            <div className="w-40 h-40 justify-self-center md:col-span-2  md:justify-self-end">
              <Doughnut data={data} />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 bg-white dark:bg-[#444d58] p-4 shadow-md   rounded-[10px]">
          <h1 className="font-bold mt-2 mb-2 dark:text-white">CREDITS</h1>
          <div className="text-lg text-gray-700 mb-2 mt-2 flex justify-between items-center">
            <span className="text-md  dark:text-white  ">Remaining: </span>
            <span className="font-bold text-xl dark:text-white">12,500</span>
          </div>
          <div className=" text-gray-700 mb-2 mt-2 flex justify-between items-center">
            <span className="text-md dark:text-white">Used: </span>
            <span className="font-bold text-xl dark:text-white">7.500</span>
          </div>
          <div className="flex justify-center">
            <button className=" bg-[#3c72f0] text-white py-2 rounded-[10px] hover:bg-[#2f5fd6] mt-2 mb-2 p-3 ">
              BUY MORE
            </button>
          </div>
        </div>
      </div>

      {/* modal */}
      {modalToggle && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-64 overflow-hidden">
            {/* Header color and text based on status */}
            <div
              className={`text-white text-center py-3 font-bold text-lg ${
                emailToggle === 1
                  ? "bg-green-500"
                  : emailToggle === 2
                  ? "bg-red-900"
                  : "bg-orange-500"
              }`}
            >
              {emailToggle === 1 && "Valid"}
              {emailToggle === 2 && "Invalid"}
              {emailToggle === 3 && "Already Present"}
            </div>

            {/* Email Display */}
            <div className="text-center py-4 px-4 text-sm text-gray-800">
              {email}
            </div>

            {/* Close Button */}
            <div
              onClick={() => setModalToggle(false)}
              className="bg-red-500 text-white text-center py-3 font-bold text-lg cursor-pointer"
            >
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
