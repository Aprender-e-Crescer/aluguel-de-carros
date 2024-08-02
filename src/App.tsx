import { CardCar } from "./CardCar";
import { Rodape } from "./components/Rodape";
import { SeletorIntervalo } from './components/SeletorIntervalo'
import { Banner } from "./Banner";
import { Menu } from './Menu'

export default function App() {
 return (
   <>
     <CardCar />
     <Rodape />
     <Menu />
     <Banner />
     <SeletorIntervalo />
   </>
 )
}
