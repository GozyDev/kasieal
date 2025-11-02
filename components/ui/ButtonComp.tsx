import Link from "next/link";
import React, { ReactElement } from "react";
import clsx from "clsx"; // optional, helps merge classes cleanly

interface ButtonProps {
  text: string;
  href?: string;
  Icon?: ReactElement;
  className?: string;
  variant?: "primary" | "outline" | "ghost" | "transparent";
}

const variantStyles = {
  primary: "bg-[#412188] text-white",
  outline: "bg-transparent text-[#412188] border border-[#412188]",
  ghost: "bg-transparent text-[#412188]",
  transparent: "bg-transparent text-white/70 hover:text-white",
};

const PrimaryButton = ({
  text,
  href,
  Icon,
  className = "",
  variant = "primary",
}: ButtonProps) => {
  const baseStyles =
    "py-[15px] px-[25px] text-[16px] rounded-full flex items-center gap-3 cursor-pointer transition-all duration-200 hover:opacity-90";

  const buttonClass = clsx(baseStyles, variantStyles[variant], className);

  const content = (
    <button className={buttonClass}>
      {text} {Icon ? Icon : null}
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default PrimaryButton;
