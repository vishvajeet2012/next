import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import NavBar from "./components/navBar";

function App() {
  const [count, setCount] = useState(0);

  return (
        <>
<NavBar/>
          <Routes>
      <Route path='/' element={<Homepage />} />


</Routes>

        </>


  );
}

export default App;
3