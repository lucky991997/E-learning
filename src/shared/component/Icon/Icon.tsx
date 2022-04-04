import React, { ReactNode, useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import {InputForm} from "../Input/Input";

import "./icon.scss";

interface IIconProps {
  title?: string;
  children?: ReactNode;
}

const IconAdd = () => {
  const [showInput, setShowInput] = useState(false);
  const handleInput = () => {
    // console.log(123);
    setShowInput(true)
  };
  const handleAdd = () => {
    setShowInput(false)
  }
  return (
    <div className="form-icon">
      <AiFillPlusCircle
        className="form-icon-add"
        onClick={() => handleAdd()}
      />

      <h3 className="title-16 form-icon-title"
      onClick={() => handleInput()}
      >{showInput === true ? <InputForm /> : "Thêm môn học mới"}</h3>

      
    </div>
  );
};

const IconMinus: React.FC<IIconProps> = ({ title }: IIconProps) => {
  
  return (
    <div className="form-icon">
      <AiFillMinusCircle
        className="form-icon-add"
        onClick={() => console.log(123)}
      />

      <h3 className="title-16 form-icon-title" >
        {title ? title : "default value"}
      </h3>
    </div>
  );
};

export { IconAdd, IconMinus };
