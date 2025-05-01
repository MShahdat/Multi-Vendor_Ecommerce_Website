import { useNavigate, useLocation } from "react-router"; // <-- Add useLocation

export default function EditStore() {
  const navigate = useNavigate();
  const location = useLocation(); // <-- Get the current path

  // Sidebar menu items
  const menuItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Products", path: "/dashboard/products" },
    { label: "Order", path: "/dashboard/order" },
    { label: "Withdraw", path: "/dashboard/withdraw" },
    { label: "Store", path: "/dashboard/store-details" },
    { label: "Store List", path: "/dashboard/store-list" },
    { label: "Edit Account", path: "/dashboard/store-edit" },
    { label: "Logout", path: "/logout" }, // You can handle logout separately if needed
  ];
    return (
      <div className="px-40 mt-6">
        {/* Top Title */}
        <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
        <hr className="border-t border-gray-200 mb-6" />
  
        {/* Layout: Sidebar and Main */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Sidebar */}
        <div className="w-[220px] h-100 bg-emerald-950 text-white p-4 rounded-2xl">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path; // <-- Correct way to detect active link
            return (
              <div
                key={idx}
                onClick={() => navigate(item.path)}
                className={`py-2 px-4 mb-1 text-sm font-medium rounded cursor-pointer transition-all
                  ${isActive ? "bg-pink-700 text-white" : "hover:bg-pink-700 hover:text-white"}`}
              >
                {item.label}
              </div>
            );
          })}
        </div>
  
          {/* Main Content */}
          <div className="col-span-1 md:col-span-4 space-y-6 ml-20">
            <h2 className="text-2xl font-bold mb-4">Edit Account Details</h2>
  
            {/* Form */}
            <form className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="w-50 font-semibold">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="Shahdat"
                    className="w-80 border p-2 rounded"
                  />
                </div>
  
                <div className="flex items-center space-x-4">
                  <label className="w-50 font-semibold">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="Hossain"
                    className="w-80 border p-2 rounded"
                  />
                </div>
  
                <div className="flex items-center space-x-4">
                  <label className="w-50 font-semibold">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    defaultValue="213002086@student.green.ed"
                    className="w-80 border p-2 rounded"
                  />
                </div>
              </div>
  
              {/* Password Change Section */}
              <div className=" mt-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="w-50 font-semibold">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-80 border p-2 rounded bg-blue-50"
                    defaultValue="********"
                  />
                </div>
  
                <div className="flex items-center space-x-4">
                  <label className="w-50 font-semibold">
                    New Password
                  </label>
                  <input type="password" className="w-80 border p-2 rounded" />
                </div>
  
                <div className="flex items-center space-x-4">
                  <label className="w-50 font-semibold">Confirm New Password</label>
                  <input type="password" className="w-80 border p-2 rounded" />
                </div>
              </div>
  
              {/* Save Button */}
              <button
                type="submit"
                className="mt-4 mb-10 bg-emerald-700 hover:bg-emerald-900 text-white px-6 py-2 rounded"
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  