import { About } from "./components/About"
import { Coleção } from "./components/Coleção"
import { Criadores } from "./components/Criadores"
import { Destaque } from "./components/Destaque"
import {Header} from "./components/Header"
import { Parceiros } from "./components/Parceiros"
import { FAQ } from "./components/FAQ"
import {Banner} from "./components/Banner"
import { Footer } from "./components/Footer"

function App() {
return (
      <>
      <Header />
      <Parceiros/>
      <About/>
      <Coleção/>
      <Destaque/>
      <Criadores/>
      <FAQ/>
      <Banner/>
      <Footer/>

      </>
  )
}
export default App
