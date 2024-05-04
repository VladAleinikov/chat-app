import { MessagesSquare } from 'lucide-react'
import React from 'react'

export const NoChatSelected = () => {
  return (
        <div className='flex items-center justify-center w-full h-full'>
              <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                    <p>Добро пожаловать</p>
                    <p>Выберете чат, чтобы начать общение!</p>
                    <MessagesSquare className='h-12 w-12 md:h-24 md:w-24 text-center'/>
            </div>
              
    </div>
  )
}
