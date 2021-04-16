
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
  <>
  <Particles
    params={{
      particles: {
        number: {
          value: 15,
          density: {
            enable: true,
            value_area: 900,
          }
        },
        shape: {
          type: "cirlce",
          stroke: {
            width: 6,
            color: "#f9ab00",
          }
        }
      }
    }}
  />
  <Navbar />
  <Header />
  <About />
  <Services />
  </>
  );
} 

export default App;
