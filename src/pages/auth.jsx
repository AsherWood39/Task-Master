import Button from "../components/button";
import Input from "../components/input";
import { MuthootIcon } from "../icons/muthoot";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth({ role = "User" }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	async function handleSubmit() {
		alert("Form submitted");
		navigate("/");
	}
	return (
		<div className="w-full flex justify-center">
			<div className="flex flex-col w-2/5  border p-10 rounded border-danger gap-5">
				<div className="flex justify-center">
					<MuthootIcon />
				</div>
				<div className="flex justify-center">
					<h1 className="text-2xl font-bold">
						{role === "Admin" ? "Admin" : "User"} Sign In
					</h1>
				</div>
				<Input
					type="text"
					placeholder="Username"
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					onClick={handleSubmit}
					className="rounded-md bg-red-500 text-white p-2 hover:bg-red-700"
					type="submit">
					Login
				</Button>
			</div>
		</div>
	);
}
