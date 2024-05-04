import { Separator } from "@/components/ui/separator"
import { SearchInput } from "./search-input"
import { Conversations } from "./conversations"
import { LogOut } from "lucide-react"


export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-2 border-r border-slate-500 p-4">
      <SearchInput />
      <Separator />
      <Conversations />

      <LogOut className="mt-auto w-6 h-6 text-white cursor-pointer hover:text-blue-500 transition"/>
    </div>
  )
}
