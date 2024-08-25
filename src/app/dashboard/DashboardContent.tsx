"use client";

import { User } from "next-auth";
import { LogoutButton } from "@/components/LogoutButton";
import Link from "next/link";

interface DashboardContentProps {
  user: User;
}

export default function DashboardContent({ user }: DashboardContentProps) {
  return (
    <div>

      {/* Your dashboard content */}

          Welcome, {user.name}

      <p className="mt-2 ">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            Home page
          </Link>
        </p>

          <LogoutButton  />
          
    </div>
  );
}