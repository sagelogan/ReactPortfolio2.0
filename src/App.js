
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
  <>
  <Particles
    params={{
      particles: {
        number: {
          value: 20,
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
  </>
  );
} 

export default App;
