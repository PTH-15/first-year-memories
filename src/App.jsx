import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MemorySection from "./components/MemorySection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <MemorySection />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default App;