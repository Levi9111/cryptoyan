import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import { Fragment } from "react/jsx-runtime";
import Roadmap from "./Components/Roadmap";
import PreFooter from "./Components/PreFooter";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Roadmap />
      <PreFooter />
      <Footer />
    </Fragment>
  );
};

export default App;
