"use client"

import { useAuthUserQuery } from "@/lib/auth/auth.api"
import { useRouter } from "next/navigation"

interface MainLayoutProps{
  children: React.ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  const router = useRouter();
  const {data: user, isLoading } = useAuthUserQuery();


  if (isLoading) {
    return null;
  }
  if (!user) {
    router.push("/login");
}
  return (
    <>{children}</>
  )
}

export default MainLayout