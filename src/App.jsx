import { Navbar } from "./components/Navbar";
import { Feature } from "./components/Feature";
import { Dashboard } from "./components/Dashboard";
import { Notify } from "./components/Notify";
import { AlaCart } from "./components/AlaCart";
import { Contact } from "./components/Contact";
function App() {
  return (
    <>
      <div className="h-[8vh] w-[100vw]">
        <Navbar />
      </div>
      <div className="h-[40vh] w-[100vw] md:h-[50vh]">
        <Feature />
      </div>
      <div className="h-[65vh] w-full bg-[#FAF9F6] sm:h-[60vh]">
        <Dashboard />
      </div>
      <div className="h-[60vh] w-full">
        <Notify />
      </div>
      <div className="h-auto w-full bg-[#FAF9F6] flex flex-col items-center justify-center md:flex-row md:gap-12">
        <AlaCart />
      </div>
      <div className="h-[80vh] w-full md:h-[50vh] lg:h-[30vh]">
        <Contact />
      </div>
    </>
  );
}

export default App;
