export function Filtro() {
  return (
    <div>
      <div className="w-64 h-screen bg-gray-100 p-4 text-gray-700">
        <p className="text-gray-700 mb-6 text-xs">TYPE</p>
        <div className="mb-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="sport" className="ml-2 text-gray-700">
            Sport <span className="text-gray-500">(10)</span>
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="suv" className="ml-2 text-gray-700">
            Suv <span className="text-gray-500">(12)</span>
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="MPV" className="ml-2 text-gray-700">
            MPV <span className="text-gray-500">(16)</span>
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="Sedan" className="ml-2 text-gray-700">
            Sedan <span className="text-gray-500">(20)</span>
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="Coupe" className="ml-2 text-gray-700">
            Coupe <span className="text-gray-500">(14)</span>
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="Hatchback" className="ml-2 text-gray-700">
            Hatchback <span className="text-gray-500">(14)</span>
          </label>
        </div>
        <div>
          <p className="text-gray-700 mb-3 text-xs mt-8">CAPACITY</p>
          <div className="mb-4 mt-5">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              id="2person"
            />
            <label htmlFor="2person" className="ml-2 text-gray-700">
              2 Person <span className="text-gray-500">(10)</span>
            </label>
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              id="4person"
            />
            <label htmlFor="4person" className="ml-2 text-gray-700">
              4 Person <span className="text-gray-500">(14)</span>
            </label>
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              id="6person"
            />
            <label htmlFor="6person" className="ml-2 text-gray-700">
              6 Person <span className="text-gray-500">(12)</span>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              id="8ormore"
            />
            <label htmlFor="8ormore" className="ml-2 text-gray-700">
              8 or More <span className="text-gray-500">(16)</span>
            </label>
          </div>
          <p className="text-gray-700 mb-3 text-xs mt-6">PRICE</p>{' '}
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            className="slider w-52"
            id="myRange"
          />
          <p className="text-black">Max. $100.00</p>
        </div>
      </div>
    </div>
  )
}
