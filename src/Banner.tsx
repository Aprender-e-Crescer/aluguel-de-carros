export function Banner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-blue-400 w-[640px] h-[380px] rounded-2xl">
      <div className="bg-[url('/assets/banner.png')] bg-cover h-full">
        <div className="flex flex-col ml-6 mt-5">
          <div className="flex flex-col gap-5">
          <div>
            <p className="text-4xl text-white font-semibold">
              The Best Platform
              <span className="block">for Car Rental</span>
            </p>
          </div>
          <div className="text-1g text-white text-lg min-w-full">
            <p>
              Ease of doing a car rental safety and
              <span className="block">reliably. Of course at a low price.</span>
            </p>
          </div>
          <div>
            <button className="bg-[#3563E9] text-white text-lg font-semibold py-3 px-5 rounded-md hover:bg-blue-800 mb-0" >
              Rental Car
            </button>
          </div>
          </div>
          <div className="flex justify-center items-center mt-0">
          <img src="./assets/carro.png" alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}