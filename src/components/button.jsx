const variants = {
  primary: "bg-button-primary text-white hover:bg-blue-600",
  secondary: "bg-secondary text-white hover:bg-gray-600",
  danger: "bg-danger text-white hover:bg-red-600",
  link: "bg-transparent  hover:underline border border-blue-500 hover:border",
};
export const Button = ({ variant = "primary", children, onClick , className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 h-fit rounded-2xl transition-all duration-200 ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
export default Button;
