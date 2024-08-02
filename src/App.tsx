import { CardCar } from "./components/CardCar";
import { Rodape } from "./components/Rodape";
import { SeletorIntervalo } from './components/SeletorIntervalo'
import { Banner } from "./components/Banner";
import { Menu } from './components/Menu'

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
