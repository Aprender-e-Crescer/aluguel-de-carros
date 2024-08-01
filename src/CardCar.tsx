import car from "./assets/car.jpg";
import { MdOutlinePropaneTank } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

export function CardCar() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[304px] h-[388px] bg-[#F6F7F9] rounded-lg shadow-md p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Koeningsegg</h3>
            <p className="text-[#888]">Sport</p>
          </div>
          <div>
            <FaHeart className="text-2xl text-red-500" aria-label="heart" />
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={car}
            alt="Koenigsegg"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <MdOutlinePropaneTank className="mr-2 text-lg" aria-label="fuel" />
            <p>90L</p>
          </div>
          <div className="flex items-center">
            <TbSteeringWheel className="mr-2 text-lg" aria-label="manual" />
            <p>Manual</p>
          </div>
          <div className="flex items-center">
            <IoPersonSharp className="mr-2 text-lg" aria-label="people" />
            <p>2 People</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold">$1500/day</p>
          <button className="bg-[#007BFF] text-white border-none rounded-lg px-5 py-2 cursor-pointer text-base">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}
