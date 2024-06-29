import "./App.css";
import Navbar from "./components/navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-21.7vh)] ">
        <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App;
