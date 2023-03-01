import FoodList from "./Pages/foodList";
import Admin from "./Pages/Admin";
import LoginPanel from "./Pages/LoginPanel.js";
import Checkout from "./Components/reuse comp/Checkout";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/sjfasjfashfkjas" element={<LoginPanel />}></Route>
        <Route path="/" element={<FoodList />} exact></Route>
        <Route path="/jasfdlkashfiuashfoas" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
