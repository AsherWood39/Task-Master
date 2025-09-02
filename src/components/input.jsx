export default function Input({
	type = "text",
	placeholder = "",
	name = "",
	className = "",
	error = false,
    onChange,
}) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={
				" p-1 my-1 border-b focus:border-blue-500 focus:outline-none " +
				className +
				(error ? " border-red-500" : "")
			}
			onChange={onChange}
		/>
	);
}
