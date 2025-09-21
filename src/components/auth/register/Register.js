"use client";
import { useUser } from "@/stores/useUser";
import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";

export default function RegisterUI() {
  const { register,token,is } = useUser()
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(userInfo)
      console.log(token)
      
    } catch (error) {
      console.error("Register error:", error) };


      /* console.log("User Info:", userInfo);
      try {
        const res = await fetch("https://api.kapkup.com/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo)
        });
        const data = await res.json()
        const Token = data.data.token
        const User = data.data.user
        console.log("token: "+ Token)
        console.log("user: ", User)
      } catch (error) {
        console.log(error)
      }
       */
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-md p-6 sm:p-8 space-y-4">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              KapKup
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            {/* First Name */}
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                onChange={handleChange}
                value={userInfo.firstName}
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
              />
            </div>

            {/* Last Name */}
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                onChange={handleChange}
                value={userInfo.lastName}
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                onChange={handleChange}
                value={userInfo.email}
                name="email"
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                onChange={handleChange}
                value={userInfo.password}
                name="password"
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md transition hover:cursor-pointer text-sm"
            >
              Sign Up
            </button>
          </form>

          {/* Link */}
          <p className="text-xs text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    );
  }
