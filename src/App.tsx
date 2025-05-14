import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routing from "./routes/routs";



function App() {
  return (
    <div className="bg-base w-full h-screen flex flex-col gap-4 items-center">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
