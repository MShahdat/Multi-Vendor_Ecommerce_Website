import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router"; // corrected

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center bg-white">
      
      {/* Logo outside the box */}
      <div className="flex justify-center mb-6">
        <h1 className="text-4xl font-bold text-center">
          UdaoMart
          <span className="inline-block w-2 h-2 bg-red-500 ml-1 rounded-full"></span>
        </h1>
      </div>

      {/* Main Form inside the box */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md p-8 border rounded-lg shadow-sm">
          
          {/* Tabs */}
          <div className="flex justify-center mb-6 border-b">
            <button className="px-6 py-2 text-black font-semibold border-b-2 border-black focus:outline-none">
              Sign in
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2 text-black hover:text-black border-b-2 border-transparent focus:outline-none"
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border rounded bg-blue-50"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 border rounded bg-blue-50 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2 accent-indigo-600" />
                Keep me signed in
              </label>
              <button type="button" className="text-sm font-semibold text-black hover:underline">
                Forgot password?
              </button>
            </div>

            {/* User Type */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">User Type</label>
              <label className="flex items-center">
                <input type="radio" name="userType" className="mr-2" defaultChecked />
                I am customer
              </label>
              <label className="flex items-center">
                <input type="radio" name="userType" className="mr-2" />
                I am vendor
              </label>
            </div>

            

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 rounded mt-4"
            >
              Sign in
            </button>

            {/* Social Login */}
            <div className="mt-6 text-center">
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 border rounded-full px-5 py-2 bg-white shadow hover:shadow-md">
                  <img
                    src="https://www.svgrepo.com/show/448224/facebook.svg"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                  <span className="text-blue-600 font-medium">Facebook</span>
                </button>
                <button className="flex items-center gap-2 border rounded-full px-5 py-2 bg-white shadow hover:shadow-md">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-600 font-medium">Google</span>
                </button>
              </div>
            </div>

            {/* New Customer */}
            <p className="text-center mt-4 text-sm">
              <span
                onClick={() => navigate("/register")}
                className="font-semibold text-black hover:underline cursor-pointer"
              >
                New Customer? Create account
              </span>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
