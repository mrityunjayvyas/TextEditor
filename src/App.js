/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
import Nevbar from "./components/nevBar";
import TextForm from "./components/textForm";
import Alert from "./components/Alert";
import Aboutus from "./components/aboutus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      masg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggel = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#30336b";
      showAlert("dark mode enable", "success");
      document.title = "TextUtilite -dark";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode enable", "success");
      document.title = "TextUtilite -light";
    }
  };
  return (
    <>
      <Nevbar
        mode={mode}
        toggel={toggel}
        titel="TextUtils"
        aboutText="About TextUtils"
      />
      <Alert alert={alert} />
      <Router>
        <div className="container mb-3">
          <Routes>
            <Route exact path="/about" element={<Aboutus />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  heading="Enter the text to Analyse"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
