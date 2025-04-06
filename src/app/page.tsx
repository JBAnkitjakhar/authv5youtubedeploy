//src/app/page.tsx

import { auth } from "@/auth";
import Link from "next/link";
import { Rocket, Code, User, LogIn, UserPlus, LayoutDashboard } from "lucide-react";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  console.log("Home -> user", user);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Programmers Guild
        </h1>
        <p className="text-xl text-gray-400">Join the elite community of developers.</p>
      </div>
      
      <div className="bg-gray-800/70 backdrop-blur-lg rounded-xl p-8 w-full max-w-lg shadow-2xl transform transition-all hover:scale-105 duration-300 border border-gray-700">
        {user ? (
          <div className="text-center">
            <p className="text-2xl font-semibold mb-2">Welcome, {user.name || user.email || 'User'}!</p>
            <p className="mb-4 text-gray-400">Email: {user.email || 'Not provided'}</p>
            {/* {user.image && <img src={user.image} alt="User avatar" className="w-20 h-20 rounded-full mx-auto mb-4" />} */}
          </div>
        ) : (
          <p className="text-center text-xl mb-4 text-gray-400">Not logged in</p>
        )}
        
        <div className="flex flex-col gap-4">
          <Link href="/login" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
            <LogIn className="w-5 h-5" /> Login
          </Link>
          <Link href="/signup" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
            <UserPlus className="w-5 h-5" /> Sign Up
          </Link>
          <Link href="/dashboard" className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400">
        <p className="flex items-center justify-center gap-2">
          <Code className="w-5 h-5" /> Built with passion by the Programmers Guild
        </p>
      </div>
    </div>
  );
}