import logo from "./logo.svg";
import "./App.css";
import NavContainer from "./components/Nav/NavContainer";
import BodyContainer from "./components/BodyContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavContainer />
      <BodyContainer />
      <Footer />
    </div>
  );
}

export default App;
