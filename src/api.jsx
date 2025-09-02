const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function loginUser(role, credentials) {
  const url = `${API_BASE_URL}/auth/login/`;
  // If you have different URLs based on role, implement here
  
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw await response.json();
  return response.json();
}

export async function registerUser(role, credentials) {
  const url = `${API_BASE_URL}/auth/register/`;
  // If different URLs per role, implement here
  
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw await response.json();
  return response.json();
}
