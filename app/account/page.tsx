import React from "react";
import { auth } from "../auth";

async function AccountPage() {
  // Fetch the user's session data
  const session = await auth();
  const user = session?.user;

  // Define user information with fallback values
  const userInfo = {
    name: user?.name || "Not Signed In",
    email: user?.email || "Sign In at Home Page",
    image: user?.image || "https://via.placeholder.com/150", // Fallback placeholder image
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <div className="flex flex-col items-center">
          {/* User's profile image */}
          <img
            src={userInfo.image}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />
          {/* User's name */}
          <h1 className="text-2xl font-bold mb-2 text-gray-800">
            {userInfo.name}
          </h1>
          {/* User's email */}
          <p className="text-gray-600 mb-4">{userInfo.email}</p>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
