interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md font-medium transition-colors
      ${
        variant === "primary"
          ? "bg-emerald-400 text-white hover:bg-emerald-500"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
