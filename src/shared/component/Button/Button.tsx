import React, { ComponentProps, CSSProperties, ReactNode } from "react";
import "./button.scss";

type IProps = {
  styles?: string;
  variant: "primary" | "secondary" | 'gray';
  size?: "XL" | "M";
  children: ReactNode;
  
} & ComponentProps<"button">;
const Button = ({ variant, children, styles, size, ...rest }: IProps) => {
  return (
    <button className={`${styles} btn-${variant} ${size ? `btn-${size}`: ''}`} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
