import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import pages from "../src/pages";

function App() {
  return (
    <div className="App">
      {/* //<Header/> */}
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<pages.LoginPage />} />
          </Route>
          <Route path="/header">
            <Route index element={<pages.PhotoHeader />} />
          </Route>
          <Route path="/video">
            <Route index element={<pages.VideoHeader/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
