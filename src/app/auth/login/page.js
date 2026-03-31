"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // demo only - no real auth
    alert("Login functionality will be added later!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      {/* Top teal bar */}
      <div
        className="fixed top-0 left-0 right-0 h-2"
        style={{ backgroundColor: "#0d4f4f" }}
      />

      <div className="w-full max-w-md mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Logo size={90} />
        </div>

        {/* Welcome Text */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Please enter
          <br />
          your username and password
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 bg-gray-50/50">
            <svg
              className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
              id="login-username"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 bg-gray-50/50">
            <svg
              className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
              id="login-password"
            />
          </div>

          {/* Forgot Password */}
          <div>
            <Link
              href="#"
              className="text-sm font-semibold text-black underline hover:text-gray-700"
            >
              Forgot Password
            </Link>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-[#006bff] text-white text-sm font-bold rounded-lg hover:bg-[#0055cc] transition-colors uppercase tracking-wider"
            id="login-continue"
          >
            CONTINUE
          </button>
        </form>

        {/* Sign Up */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Don&apos;t have an Account?{" "}
          <Link
            href="#"
            className="text-[#006bff] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* Complaint */}
        <p className="text-center text-sm text-gray-500 mt-2">
          For{" "}
          <Link
            href="#"
            className="text-[#006bff] font-semibold hover:underline"
          >
            Complaint
          </Link>
        </p>
      </div>
    </div>
  );
}
