import { Fragment } from "react/jsx-runtime";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <HowItWorks />
    </Fragment>
  );
};

export default App;
