import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message={"Amazing"}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
