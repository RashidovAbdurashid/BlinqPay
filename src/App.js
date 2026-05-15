import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Payment from "./components/Payment";   
import Etsy from "./components/Etsy";
import Gets from "./components/Gets";
import Costomer from "./components/Costomer";
import Waiting from "./components/Waiting";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Payment />
      <Etsy />
      <Gets />
      <Costomer />
      <Waiting />
      <Footer />
    </div>
  );
}

export default App;
