"use client";
import { signIn } from "next-auth/react"; // Correct import for client-side usage

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-center text-lg font-medium mb-6 text-gray-800">
            Sign in with GitHub to see your user info:
          </h2>
          {/* Correctly use signIn */}
          <button
            onClick={() => signIn("github", { callbackUrl: "/account" })}
            className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
          >
            Login with Github
          </button>
        </div>
      </main>
    </div>
  );
}
