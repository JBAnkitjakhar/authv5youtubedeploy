 // src/app/dashboard/page.tsx

 
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardContent from "./DashboardContent";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return <DashboardContent user={session.user} />;
}

 