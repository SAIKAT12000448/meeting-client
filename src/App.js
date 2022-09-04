
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Componenets/Home/Home';
import Login from './Componenets/Home/Login';
import Register from './Componenets/Home/Register';
import Schedule from './Componenets/Home/Schedule';
import MeetingList from './Componenets/Home/MeetingList';
function App() {
  return (
    <div>
       <BrowserRouter>
     
     <Routes>

    
      <Route  path="/" element={<Home/>}/>
       
      <Route path="/home" element={<Home/>}/>
       
      <Route path = "/login" element={<Login/>}/>
       
      <Route path = "/register" element={<Register/>}/>
       
      <Route path = "/sh" element={<Schedule/>}/>
      <Route path = "/meet" element={<MeetingList/>}/>
       
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
