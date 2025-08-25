import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAuth from "./pages/user/user-auth";
import UserHome from "./pages/user/user-home";
import ManagerAuth from "./pages/manager/manager-auth";
import ManagerHome from "./pages/manager/manager-home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="user" >
          <Route path="auth" element={<UserAuth />} />
          <Route path="home" element={<UserHome />} />
        </Route>
        <Route path="manager">
          <Route path="auth" element={<ManagerAuth />} />
          <Route path="home" element={<ManagerHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
