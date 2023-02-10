import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Sandbox from "./Components/Sandbox";
import "./App.css";
function App() {

  return (
    <div className="App">
      <Navigation/>
      <div className="App-header">
      <Routes> 
      <Route path="/" element={<Intro />} />
      <Route path="/about" element={<About/>} />
      <Route path="/sandbox" element={<Sandbox/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;