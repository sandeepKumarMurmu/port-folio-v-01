import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Navbar from "./components/Navbar";
import Routing from "./routes/routs";


import { useToggleStore } from './store/useThemeStore';


function App() {
  const { isOpen } = useToggleStore();
  return (
    <>
      <Navbar />
      <main className=" py-20 mt-16">
        <Routing />
      </main>
      <Footer />
      {isOpen && <GetInTouch />}
    </>
  );
}

export default App;
