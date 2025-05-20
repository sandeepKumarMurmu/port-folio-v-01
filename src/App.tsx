import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Routing from "./routes/routs";


import { useToggleStore, useLoaderStor } from './store/useThemeStore';


function App() {
  const { isOpen } = useToggleStore();
  const { isLoading } = useLoaderStor();
  return (
    <>
      <Navbar />
      <main className=" py-20 mt-16">
        <Routing />
      </main>
      <Footer />
      {isOpen && <GetInTouch />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
