import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar.jsx';
import "./App.css"
import Corporate from "../src/Page/Corporate/Corporate.jsx";
import  Hotel from "../src/Page/Hotel/Hotel.jsx"
import Industrial from "../src/Page/Industrial/Industrial.jsx"
import Hospital from "../src/Page/Hospital/Hospital.jsx"
import Security from "../src/Page/Security/Security.jsx"
import ByProfession from "../src/Page/ByProfession/ByProfession.jsx"

const App = () => {
  return (
   

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/corporate' element={<Corporate/>} />
        <Route path='/hotel' element={<Hotel/>} />
        <Route path='/industrial' element={<Industrial/>} />
        <Route path='/hospital' element={<Hospital/>} />
        <Route path='/security' element={<Security/>} />
        <Route path='/byprofession' element={<ByProfession/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
