import { MessageContainer } from "./_components/message-container"
import { Sidebar } from "./_components/sidebar"

const MainPage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] p-5 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer/>
    </div>
  )
}

export default MainPage