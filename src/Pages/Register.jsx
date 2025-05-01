import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router"; // <-- import navigate

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleVendorClick = () => {
    navigate("/registerv");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      
      {/* Logo outside the box */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center">
          UdaoMart
          <span className="inline-block w-2 h-2 bg-red-500 ml-1 rounded-full"></span>
        </h1>
      </div>

      {/* Form Box */}
      <div className="max-w-md w-full border rounded-md shadow-sm p-8">
        
        {/* Tabs */}
        
        <div className="flex justify-center mb-6 border-b">
          <button
            onClick={() => navigate("/signin")}
            className="px-6 py-2 text-gray-500 border-b-2 border-transparent hover:text-indigo-600 focus:outline-none"
          >
            Sign in
          </button>
          <button className="px-6 py-2 text-black font-semibold border-b-2 border-indigo-600 focus:outline-none">
            Create Account
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600 pr-10"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>

          {/* User Type */}
          <div className="flex flex-col space-y-2">
            <label className="block text-sm font-medium text-gray-700">User Type</label>
            <label className="flex items-center">
              <input type="radio" name="userType" className="mr-2" defaultChecked />
              I am customer
            </label>
            <label
              className="flex items-center cursor-pointer"
              onClick={handleVendorClick}
            >
              <input type="radio" name="userType" className="mr-2" />
              I am vendor
            </label>
          </div>

          {/* Privacy Text */}
          <p className="text-xs text-gray-500">
            Your personal data will be used to support your experience throughout this website, to manage
            access to your account, and for other purposes described in our{" "}
            <span className="font-semibold text-black cursor-pointer underline">Privacy policy</span>.
          </p>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-2 rounded hover:bg-indigo-800 transition"
          >
            Register
          </button>
        </form>

        {/* Sign in Link */}
        <p className="text-center text-sm mt-4">
          Already a member?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="font-semibold underline hover:text-indigo-700 cursor-pointer"
          >
            Sign in
          </span>
        </p>

        {/* OR - Social Signup */}
        <div className="mt-6">
          <p className="text-center text-sm mb-4">Sign up with...</p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center gap-2 border rounded px-4 py-2 bg-gray-100 hover:bg-gray-200">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>

            <button className="flex items-center gap-2 border rounded px-4 py-2 bg-gray-100 hover:bg-gray-200">
              <img
                src="https://www.svgrepo.com/show/448224/facebook.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              Facebook
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-xs text-gray-500 text-center mt-6 space-y-1">
        <p>Copyright © 2025 UdaoMart, All rights reserved</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Term of Use</a>
          <a href="#" className="hover:underline">Site Map</a>
        </div>
      </footer>
    </div>
  );
}
