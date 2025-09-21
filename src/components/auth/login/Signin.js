"use client";
import React, { useState, useEffect } from "react";
import { Mail, Lock, LogOut } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/stores/useUser";

export default function Signin() {
  const { login, token, isAuthed, logout } = useUser()
  const [loginInfo, setLoginInfo] = useState({

    email: "",
    password: ""
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(loginInfo)
    console.log("token show: " + token)


    /*    const loginRes = await fetch("https://api.kapkup.com/api/auth/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(loginInfo),
       });
       const loginData = await loginRes.json();
       console.log("loginData: ", loginData);
       if (loginData.success) {
         const token = loginData.data.token;
         localStorage.setItem("token", token);
         setIsAuthed(true);
         alert(`Welcome!`);
       } */
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-2xl grid grid-cols-1 md:grid-cols-2">
        {/* Image side */}
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1920&auto=format&fit=crop"
            alt="Login illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <div className="text-white mb-4">
              <h1 className="text-2xl font-bold mb-1">Welcome Back!</h1>
              <p className="text-gray-200 text-sm">
                Log in to explore the best deals with KapKup.
              </p>
            </div>
          </div>
        </div>
        {/* Form / Logout side */}
        <div className="p-5 sm:p-6 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="md:hidden flex justify-center mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                KapKup
              </div>
            </div>
            {isAuthed ? (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">You are logged in!</h2>
                <button
                  onClick={logout}
                  className="py-2 px-4 rounded-lg text-white font-semibold bg-red-500 hover:bg-red-600 shadow-md transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center md:text-left">
                  Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      onChange={handlechange}
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      onChange={handlechange}
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Password"
                      className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href="/forgot-password"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <button className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md transition hover:cursor-pointer text-sm">
                    Login
                  </button>
                </form>
              </>
            )}
            {!isAuthed && (
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-600">
                  Don’t have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
