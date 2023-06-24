import {
 BrowserRouter as Router ,
  Route,
  Routes,

} from "react-router-dom";
import React, { useState } from 'react';

import pages from "../src/pages";
import background_theme from '../src/background_theme.jpg'

function App() {
  

  return (
    <div className="App"  >
      {/* //<Header/> */}
      <Router>
      <Routes>
        
          <Route path="/">
                <Route index element={<pages.LoginPage/>} />
              </Route>
          <Route path="/header">
            <Route index element={<pages.PhotoHeader/>}/>
          </Route>
          
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
