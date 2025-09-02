import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Auth from "./pages/user/user-auth"; // renamed Auth component for all roles
import UserHome from "./pages/user/user-home";
import ManagerHome from "./pages/manager/manager-home";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="user">
          {/* Redirect to /user/home if logged in */}
          <Route
            path="auth"
            element={token ? <Navigate to="/user/home" replace /> : <Auth role="user" mode="signin" />}
          />
          <Route
            path="register"
            element={token ? <Navigate to="/user/home" replace /> : <Auth role="user" mode="signup" />}
          />
          {/* Protect home route */}
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <UserHome />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="manager">
          <Route
            path="auth"
            element={token ? <Navigate to="/manager/home" replace /> : <Auth role="admin" mode="signin" />}
          />
          <Route
            path="register"
            element={token ? <Navigate to="/manager/home" replace /> : <Auth role="admin" mode="signup" />}
          />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <ManagerHome />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Redirect any unknown paths */}
        <Route
          path="*"
          element={<Navigate to={token ? "/user/home" : "/user/auth"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
