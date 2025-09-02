import { useNavigate } from "react-router-dom";

export function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    // You could decode role from token here for redirecting
    navigate("/user/auth"); // Or conditionally redirect based on role
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
    >
      Logout
    </button>
  );
}
