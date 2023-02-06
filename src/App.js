import FoodList from "./Pages/foodList";
import Admin from "./Pages/Admin";
import { Route, Routes } from "react-router-dom";
import LoginPanel from "./Pages/LoginPanel.js/LoginPanel";


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/adminlogin" element={<LoginPanel />}></Route>
        <Route path="/" element={<FoodList />} exact></Route>
        <Route path="/Adminpanel" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
