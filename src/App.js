import FoodList from "./Pages/foodList";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/" element={<FoodList />} exact></Route>
        <Route path="/Adminpanel" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
