// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert('Dark mode has been enabled', 'success')
      document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now "
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled', 'success')
      document.title = "TextUtils - Light Mode"
    }
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With Mustafa
    //     </a>
    //   </header>
    // </div>
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert Alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
          </div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
