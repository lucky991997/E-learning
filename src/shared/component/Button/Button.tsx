import React, { ComponentProps, CSSProperties, ReactNode } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./button.scss";

type IProps = {
  styles?: string;
  variant: "primary" | "secondary" | 'gray' | 'course' | 'file';
  size?: "XL" | "M" | "S";
  children: ReactNode;
  icon?: 'add'

} & ComponentProps<"button">;
const Button = ({ variant, children, styles, icon, size, ...rest }: IProps) => {
  return (
    <button className={`${styles ? styles : ''} btn-${variant} ${size ? `btn-${size}` : ''}`} {...rest}>
      {
        icon ? <AiOutlinePlus className="btn-icon"/> : ''
      }
      <span>{children}</span>
    </button>
  );
};

export default Button;
