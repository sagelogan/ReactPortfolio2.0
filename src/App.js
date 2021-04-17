
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import SinglePagePDFViewer from "./components/pdf/single-page";
// import samplePDF from "./sample.pdf";
// import AllPagesPDFViewer from "./components/pdf/all-pages.js";



function App() {
  return (
  <>
  <Router>
    <Navbar />
    <Switch>
      <Route  exact path={["/"]}>
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
        <Header />
      
       
      </Route>
      <Route  exact path={["/about"]}>
         <About />
      </Route>

      <Route  exact path={["/services"]}>
        <Services />
      </Route>

      <Route  exact path={["/experience"]}>
        <Experience />
      </Route>

      <Route  exact path={["/portfolio"]}>
        <Portfolio />
      </Route>

    </Switch>
    <Footer/>
  </Router>
  </>
  );
} 

export default App;

