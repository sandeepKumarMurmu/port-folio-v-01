import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Navbar from "./components/Navbar";
import Routing from "./routes/routs";


import { useToggleStore } from './store/useThemeStore';


function App() {
  const { isOpen } = useToggleStore();
  return (
    <div className="bg-base w-full h-screen flex flex-col gap-4 items-center">
      <Navbar />
      <Routing />
      {isOpen && <GetInTouch />}
      <Footer />
    </div>
  );
}

export default App;
