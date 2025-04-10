import React from "react";

const Button = ({ variant = "primary", children, ...props }) => {
  const baseStyles = "py-2 px-4 rounded-xl font-semibold focus:outline-none";
  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "bg-primary text-white hover:bg-blue-600";
      break;
    case "secondary":
      variantStyles =
        "border border-primary text-primary hover:bg-primary hover:text-white";
      break;
    case "cta":
      variantStyles = "bg-accent text-white hover:bg-orange-600";
      break;
    default:
      variantStyles = "bg-primary text-white";
  }
  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
