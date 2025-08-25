import { MuthootIcon } from "../../icons/muthoot";
import Auth from "../auth";

export default function UserAuth() {
	return (
		<div className=" fixed h-screen w-screen flex flex-col justify-center items-center ">
			
			<Auth role="User" />
		</div>
	);
}
