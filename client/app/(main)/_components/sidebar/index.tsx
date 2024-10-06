"use client"

import { Separator } from "@/components/ui/separator"
import { SearchInput } from "./search-input"
import { Conversations } from "./conversations"
import { LogOut } from "lucide-react"
import { useLogoutMutation } from "@/lib/auth/auth.api"


export const Sidebar = () => {
  const [logout, { }] = useLogoutMutation();

  return (
    <div className="flex flex-col gap-y-2 border-r border-slate-500 p-4">
      <SearchInput />
      <Separator />
      <Conversations />

      <LogOut onClick={() => logout()} className="mt-auto w-6 h-6 text-white cursor-pointer hover:text-blue-500 transition"/>
    </div>
  )
}
