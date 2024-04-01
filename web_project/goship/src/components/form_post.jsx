import React from "react";
import { logo1 } from "../assets";
import {
  FaUser,
  FaShoppingBag,
  FaMapPin,
  FaWallet,
  FaCalendarDay,
  FaStar,
  FaBook,
} from "react-icons/fa";
import { PhotoIcon } from "@heroicons/react/24/solid";

const CardForm = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu saat tombol submit ditekan
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50 overflow-auto py-3 ">
      <div className="bg-white py-6 px-10 rounded-lg shadow-md max-w-full max-h-full overflow-y-auto overflow-y-scroll no-scrollbar">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={logo1} alt="Goship Logo" className="h-10 w-auto mr-4" />
            <div className="border-l-2 border-black pl-4">
              <h2 className="text-lg font-semibold">Insert Data</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none border-2 border-black rounded-md p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <p className="pl-1">Company Profile Photo</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  Drag files or select images
                </p>
                <div className="flex justify-center">
                  <label
                    htmlFor="file-upload-btn"
                    className="mt-5 cursor-pointer"
                  >
                    <input
                      id="file-upload-btn"
                      type="file"
                      className="hidden"
                    />
                    <div className="text-gray-500 hover:text-gray-700 focus:outline-none border-2 border-orange rounded-md p-1">
                      <span style={{ padding: "9px", color: "orange" }}>+</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="input-group flex inline-block border border-1 rounded-md">
                  <FaUser className="input-icon m-2" />
                  <input
                    type="text"
                    name="internshipPlace"
                    id="internshipPlace"
                    placeholder="Name of Internship Place"
                    className="block w-full py-1.5 ps-0 text-gray-900 placeholder:text-gray-400 placeholder:text-xs focus:ring-inset focus:ring-indigo-600 sm:text-sm border-0"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="input-group flex inline-block border items-center justify-center border-1 rounded-md">
                  <FaShoppingBag className="input-icon m-2 text-xs" />
                  <input
                    type="text"
                    name="Field of Internship"
                    id="Field of Internship"
                    placeholder="Field of Internship"
                    className="block w-full py-1.5 ps-0 text-gray-900 placeholder:text-gray-400 placeholder:text-xs focus:ring-inset focus:ring-indigo-600 sm:text-sm border-0"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="input-group flex inline-block border border-1 rounded-md">
                  <FaMapPin className="input-icon m-2" />
                  <input
                    type="text"
                    name="internship location"
                    id="internship location"
                    placeholder="internship location"
                    className="block w-full py-1.5 ps-0 text-gray-900 placeholder:text-gray-400 placeholder:text-xs focus:ring-inset focus:ring-indigo-600 sm:text-sm border-0"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="input-group flex inline-block border border-1 rounded-md">
                  <FaWallet className="input-icon m-2" />
                  <input
                    type="text"
                    name="Internship division"
                    id="Internship division"
                    placeholder="Internship division"
                    className="block w-full py-1.5 ps-0 text-gray-900 placeholder:text-gray-400 placeholder:text-xs focus:ring-inset focus:ring-indigo-600 sm:text-sm border-0"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="input-group flex inline-block border items-center border-1 rounded-md relative">
                  <FaCalendarDay className="input-icon m-2 text-xs" />
                  <input
                    type="text"
                    name="Duration of internship"
                    id="Duration of internship"
                    placeholder="Duration of internship"
                    className="block w-full py-1.5 ps-0 text-gray-900 placeholder:text-gray-400 placeholder:text-xs focus:ring-inset focus:ring-indigo-600 sm:text-sm border-0"
                  />
                  <span class="absolute inset-y-0 right-0 flex items-center pr-2 text-amber-500 text-xs text-amber-500">
                    bulan
                  </span>
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="input-group flex inline-block border border-1 items-center rounded-md relative">
                  <FaStar className="input-icon m-2 text-xs" />
                  <input
                    type="text"
                    name="Getting pocket Money ??"
                    id="Getting pocket Money ??"
                    placeholder="Getting pocket Money ??"
                    className="block w-full py-1.5 ps-0 text-gray-900 placeholder:text-gray-400 placeholder:text-xs focus:ring-inset focus:ring-indigo-600 sm:text-sm border-0 px-16"
                  />
                  <div className="absolute right-0">
                    <button className="border border-amber-500 text-orange-500 py-1 px-2 rounded-md text-xs me-1">
                      Yes
                    </button>
                    <button className="border border-amber-500 text-orange-500 py-1 px-2 rounded-md text-xs me-1">
                      No
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <div className="input-group flex inline-block border border-1 rounded-md">
                  <FaBook className="input-icon m-2 text-xs" />
                  <input
                    type="text"
                    name="Title of internship report "
                    id="Title of internship report "
                    placeholder="Title of internship report "
                    className="block w-full py-1.5 ps-0 text-gray-900 placeholder:text-gray-400 placeholder:text-xs focus:ring-inset focus:ring-indigo-600 sm:text-sm border-0"
                  />
                </div>
              </div>

              <div className="col-span-full ">
                <div className="input-group text-xs ">
                  <input 
                    type="text"
                    name="Tell us about your internship experience here"
                    id="Tell us about your internship experience here"
                    placeholder="Tell us about your internship experience here"
                    className=" block w-full rounded-md border-0 py-1.5 px-10 -pt-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    style={{ height: "100px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
          <button
              type="submit"
              className="bg-amber-600 w-full hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardForm;