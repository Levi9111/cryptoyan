import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
    </div>
  );
};

export default App;
