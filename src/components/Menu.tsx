import heart from '../assets/images/heart.png'
import notification from '../assets/images/notification.png'
import setting from '../assets/images/setting-2.png'
import image from '../assets/images/Image.png'

import { Search, SlidersHorizontal } from 'lucide-react'

export function Menu() {
  return (
    <div className="flex place-items-center p-10  pl-12 mt-2 justify-between bg-[#F6F7F9] rounded-3xl shadow-2xl">
      <div className="flex flex-1 gap-20">
        <h1 className="text-[#3563E9] text-3xl font-bold ">MORENT </h1>
        <div className="flex-1">
          <Search className="relative top-9 left-2 -mt-6 text-[#596780]"></Search>
          <input
            className='"border border-gray-300 rounded-full pr-12 p-3 pl-10 w-full max-w-[500px] border-0 focus:border-0 focus:outline-transparent focus:ring bg-[#C3D4E9]"'
            type="text"
            name=""
            id=""
            placeholder="Search something here"
          />
          <SlidersHorizontal className="relative -top-3 left-[460px] -mt-6 text-[#596780]"></SlidersHorizontal>
        </div>
      </div>
      <div className="flex place-items-center gap-8 ">
        <div className="border border-[#596780]-300 p-2 rounded-full mb-4">
          <img src={heart} alt="" />
        </div>
        <div className="border border-[#596780]-300 p-2 rounded-full mb-4">
          <img src={notification} alt="" />
        </div>
        <div className="border border-[#596780]-300 p-2 rounded-full mb-4">
          <img src={setting} alt="" />
        </div>
        <div className="border border-[#596780]-300  rounded-full mb-4">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}
