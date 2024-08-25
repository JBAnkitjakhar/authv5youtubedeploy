//src/app/login/page.tsx

"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm } from "@/components/client/form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const result = await signIn("google", { callbackUrl: "/dashboard", redirect: false });
      if (result?.error) {
        
        toast.error("Failed to sign in with Google");
      } else {
        toast.success("Logged in successfully with Google");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Please sign in to your account.
          </p>
        </div>
        <LoginForm />
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>
          <button
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading}
            className="mt-6 w-full flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow transition duration-300 ease-in-out disabled:opacity-50"
          >
             <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>{isGoogleLoading ? "Signing in..." : "Login with Google"}</span>
          </button>
          <p className="mt-8 text-center">
            <Link
              href="/signup"
              className="text-sm text-blue-600 hover:underline"
            >
              Dont have an account? Sign up
            </Link>
          </p>
          <p className="mt-2 text-center">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            Home page
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;