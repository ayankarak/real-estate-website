
function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) {
    const variants = {
        primary: "bg-emerald-600 text-white hover:bg-emerald-700",
        secondary: "bg-slate-900 text-white hover:bg-slate-800",
        outline: "border border-slate-300 text-slate-800 hover:border-emerald-600 hover:text-emerald-600",
        ghost: "text-slate-700 hover:bg-slate-100",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    return (
        <button
            className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
