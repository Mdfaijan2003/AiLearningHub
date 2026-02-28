export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "rounded-2xl font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,140,0,0.7)]",

    secondary:
      "px-8 py-4 border border-white/30 text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",

    navbar:
      "px-6 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-black hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,140,0,0.7)]",

    cta:
      "px-10 py-5 text-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-black hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,140,0,0.8)]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}