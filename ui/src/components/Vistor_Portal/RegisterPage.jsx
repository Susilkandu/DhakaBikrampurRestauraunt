import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfcfc] to-[#f2f8ff] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 space-y-6 transition duration-300 hover:shadow-2xl">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Join Us 🍽️</h2>
          <p className="text-gray-500 text-sm mt-1">
            Become a member of Dhaka Bikrampur Restaurant
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Tanvir Hasan"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="+880 1XXXXXXXXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Create Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2 accent-blue-500 cursor-pointer" />
            <span>
              I agree to the{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                terms & conditions
              </span>
            </span>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 cursor-pointer"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 pt-2 cursor-pointer">
          Already a member?{" "}
          <button className="text-blue-600 font-medium hover:underline cursor-pointer">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
