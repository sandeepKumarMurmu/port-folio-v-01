
import Navbar from "./components/Navbar";
import Routing from "./routes/routs";

function App() {
  return (
    <div className="bg-base w-full h-screen px-3 flex flex-col gap-4">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
