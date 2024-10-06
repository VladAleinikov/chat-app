"use client"

import { useAuthUserQuery } from "@/lib/auth/auth.api";
import { useRouter } from "next/navigation";

interface AuthLayoutProps{
  children: React.ReactNode
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  const router = useRouter();
  const {data: user, isLoading } = useAuthUserQuery();

  if (isLoading) {
    return null
  }
  if (user) {
    router.push("/");
  }
  
  return (
    <>{children}</>
  )
}

export default AuthLayout