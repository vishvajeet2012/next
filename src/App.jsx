import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import NavBar from "./components/navBar";
import SearchFunctionalty from "./components/searchFunctionalty";
import Counter from "./components/Counter";
import FromValidation from "./components/formValidation";

function App() {
  const [count, setCount] = useState(0);

  return (
        <>
<NavBar/>
          <Routes>
          <Route path='/formValidation' element={<FromValidation/>}/>
      <Route path='/' element={<Homepage />} />
            <Route path="/counter" element={<Counter/>}/>

</Routes>

        </>


  );
}

export default App;
3