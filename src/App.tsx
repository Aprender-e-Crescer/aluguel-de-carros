import { CardCar } from "./components/CardCar";
import { Rodape } from "./components/Rodape";
import { SeletorIntervalo } from './components/SeletorIntervalo'
import { Banner } from "./components/Banner";
import { Menu } from './components/Menu'
import { ArrowDownUp } from "lucide-react";

const cars = new Array(16).fill(null);

export default function App() {
 return (
   <div className="flex flex-col gap-y-8">
      <Menu />
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-8 max-w-[1500px]">
          <section className="flex gap-x-8 justify-between">
            <Banner />
            <Banner />
          </section>
          <div className="flex">
            <SeletorIntervalo />
            <div className="flex flex-1 justify-center items-center">
              <button type="button" className="bg-blue-500 rounded-md p-4">
                <ArrowDownUp className="text-white" />
              </button>
            </div>
            <SeletorIntervalo />
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8 justify-center">
            {cars.map(() => <CardCar />)}
          </div>
        </div>
      </div>
      <Rodape />
   </div>
 )
}
