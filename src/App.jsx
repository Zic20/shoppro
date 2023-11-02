import "./App.css";
import Navbar from "./components/Navbar";
import Businesses from "./sections/Businesses";
import Features from "./sections/Features";
import GettingStarted from "./sections/GettingStarted";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Solutions from "./sections/Solutions";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <Businesses />
      <Features />
      <GettingStarted />
      <Pricing />
    </>
  );
}

export default App;
