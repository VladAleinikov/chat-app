import { Separator } from "@/components/ui/separator"
import { SearchInput } from "./search-input"
import { Conversations } from "./conversations"
import { LogOut } from "lucide-react"


export const Sidebar = () => {
  const conversations: any[] = null;
  return (
    <div>
      <SearchInput disabled={!conversations} />
      <Separator />
      {!conversations
        ? <Conversations.Skeleton />
        : <Conversations />
      }
      <LogOut/>
    </div>
  )
}
