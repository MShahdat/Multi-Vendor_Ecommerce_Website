import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router"; // <-- import navigate

const RegisterV = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("vendor");
  const [showPassword, setShowPassword] = useState(false);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    if (role === "customer") {
      navigate("/register");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Logo OUTSIDE the box */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold">
          UdaoMart
          <span className="inline-block w-2 h-2 bg-red-500 ml-1 rounded-full"></span>
        </h1>
      </div>

      {/* Main Form Box */}
      <div className="w-full max-w-md p-8 border rounded-lg shadow-sm">
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
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded bg-gray-100"
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

          {/* First Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Shop Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Shop Name</label>
            <input
              type="text"
              placeholder="Enter shop name"
              className="w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Shop URL */}
          <div>
            <label className="text-sm font-medium text-gray-700">Shop URL</label>
            <input
              type="text"
              placeholder="Enter the shop URL"
              className="w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Role selection */}
          <div className="flex items-center gap-6 mt-4">
            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="customer"
                checked={selectedRole === "customer"}
                onChange={() => handleRoleChange("customer")}
                className="accent-indigo-600"
              />
              I am customer
            </label>
            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="vendor"
                checked={selectedRole === "vendor"}
                onChange={() => handleRoleChange("vendor")}
                className="accent-indigo-600"
              />
              I am vendor
            </label>
          </div>

          {/* Privacy policy */}
          <p className="text-xs text-gray-500 mt-2">
            Your personal data will be used to support your experience throughout this website,
            to manage access to your account, and for other purposes described in our{" "}
            <span className="text-black font-semibold underline cursor-pointer">
              Privacy policy
            </span>.
          </p>

          {/* Register button */}
          <button
            type="submit"
            className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 rounded mt-4"
          >
            Register
          </button>

          {/* Already have an account */}
          <p className="text-center mt-4 text-sm">
            Already a member?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="text-black font-semibold underline cursor-pointer"
            >
              Sign in
            </span>
          </p>
        </form>

        {/* Social login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-3">Sign up with...</p>
          <div className="flex justify-center gap-4">
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
    </div>
  );
};

export default RegisterV;
