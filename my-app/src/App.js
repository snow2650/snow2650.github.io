// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Cars from './Pages/Cars';
import Games from './Pages/Games';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Projects" element={<Projects />} />
        
      </Routes>
    </Router>
  );
};

export default App;
