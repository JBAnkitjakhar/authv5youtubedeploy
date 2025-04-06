// src/app/dashboard/page.tsx

import { auth } from "@/auth"
import DashboardContent from "./DashboardContent"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  return <DashboardContent user={session.user} />
}