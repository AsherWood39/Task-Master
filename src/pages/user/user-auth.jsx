import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MuthootIcon } from "../../icons/muthoot";
import { loginUser, registerUser } from "../../api"; // Import auth API functions
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export default function Auth({ role = "user", mode = "signin" }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const isSignin = mode === "signin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let data;
      if (isSignin) {
        // Call login function based on role
        data = await loginUser(role, { username, password });
      } else {
        // Call register function based on role
        data = await registerUser(role, { username, password });
      }

      localStorage.setItem("token", data.access || data.token);

      setUsername("");
      setPassword("");

      // Redirect based on role after successful auth
      navigate(role === "admin" ? "/manager/home" : "/user/home");
    } catch (err) {
      setError(
        err.response?.data?.detail || err.message || (isSignin ? "Login failed" : "Signup failed")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <MuthootIcon className="w-32 h-32 mb-8" />
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl mb-5 font-semibold text-center">
          {role === "admin" ? "Admin" : "User"} {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {error && <p className="text-red-600 mb-3 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-3 py-2 rounded"
            required
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded"
            required
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-red-500 text-white py-2 rounded hover:bg-gray-600 disabled:opacity-50"
          >
            {loading ? (isSignin ? "Signing in..." : "Signing up...") : (isSignin ? "Sign In" : "Sign Up")}
          </button>
        </form>
      </div>
    </div>
  );
}
