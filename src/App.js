import FoodList from "./Pages/foodList";
import Admin from "./Pages/Admin";
import { Route, Routes } from "react-router-dom";
import LoginPanel from "./Pages/LoginPanel.js";


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/sjfasjfashfkjas" element={<LoginPanel />}></Route>
        <Route path="/" element={<FoodList />} exact></Route>
        <Route path="/jasfdlkashfiuashfoas" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
