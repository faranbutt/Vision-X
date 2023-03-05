import ParticlesBg from 'particles-bg'
import NavBar from "./components/navigation/NavBar"
import Logo from "./components/logo/logo"
import ImageLinkForm from "./components/image-link-form/image-link"
import Rank from "./components/Rank/Rank"


function App() {

  return (
    <div className="App">
      <NavBar />
      <ImageLinkForm />
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  )
}

export default App
