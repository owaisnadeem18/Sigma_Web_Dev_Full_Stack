import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards-container">
        <Cards title="Hamza Arshad" role="Medical Student" />
        <Cards title="Hammad Arshad" role="AI Student" />
        <Cards title="Hassan Yousuf" role="Amazon Entusiat" />
        <Cards title="Saim Arshad" role="School Student" />
        <Cards title="Owais Nadeem" role="Mern Stack Student" />
        <Cards title="Javeria" role="Dr. Student" />
      </div>
      <Footer />
    </>
  );
}

export default App;

// In react js , every component is a function
