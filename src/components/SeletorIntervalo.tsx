import { IoIosArrowDown } from 'react-icons/io'

function SeletorIntervalo() {
  return (
    <div className="body bg-[#F6F7F9] w-max">
      <div className="container flex flex-col gap-3 w-424px">
        <div className="conteudo bg-white p-4 rounded-xl shadow-xl h-min flex flex-col gap-5 w-424px">
          <div className="pick-up flex gap-3 h-5">
            <input
              type="radio"
              className="font-bold size-5 text-[#1A202C]"
            ></input>
            <p className="font-bold">Pick-Up</p>
          </div>

          <div className="flex flex-row gap-6">
            <div className="locations flex flex-col gap-3 border-r border-gray-200 pr-4">
              <p className="font-bold text-[#1A202C]">Locations</p>
              <div className="flex gap-3 items-center">
                <p className="text-[#90A3BF]">Select your city</p>
                <IoIosArrowDown />
              </div>
            </div>

            <div className="date flex flex-col gap-3 border-r border-gray-200 pr-4">
              <p className="font-bold text-[#1A202C]">Date</p>
              <div className="flex gap-3 items-center">
                <p className="text-[#90A3BF]">Select your date</p>
                <IoIosArrowDown />
              </div>
            </div>

            <div className="time flex flex-col gap-3">
              <p className="font-bold text-[#1A202C]">Time</p>
              <div className="flex gap-3 items-center">
                <p className="text-[#90A3BF]">Select your time</p>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeletorIntervalo
