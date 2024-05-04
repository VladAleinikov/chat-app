import { Send } from 'lucide-react'
import React from 'react'

export const MessageInput = () => {
      return (
            <form className='px-4 my-3'>
                  <div className="w-full relative">
                        <input
                              type="text"
                              className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-700 text-white'
                              placeholder='Отправьте сообщение'
                        />
                        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                              <Send className='w-5 h-5 text-white hover:text-blue-500 transition'/>
                        </button>
                  </div>
            </form>
      )
}
