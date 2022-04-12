import React, { CSSProperties, ReactNode, useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineDown, AiOutlineUp, AiOutlineUnorderedList, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { InputForm } from "../Input/Input";

import "./icon.scss";

interface IIconProps {
  title?: string;
  children?: ReactNode;
  styles?: string;
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

const IconMinus: React.FC<IIconProps> = ({ styles, title }: IIconProps) => {

  return (
    <div className="form-icon">
      <AiFillMinusCircle
        className="form-icon-add"
        onClick={() => console.log(123)}
      />

      <h3 className={`${styles} form-icon-title`}>
        {title ? title : "default value"}
      </h3>
    </div>
  );
};

const IconSort = () => {
  return (
    <div className="sort-icon">
      <AiOutlineUp />
      <AiOutlineDown />
    </div>
  )
}
const IconDelete = (props: any) => {
  return (
    <RiDeleteBin6Line {...props} />
  )
}
const IconEdit = (props: any) => {
  return (
    <FiEdit {...props} />
  )
}
const IconList = (props: any) => {
  return <AiOutlineUnorderedList {...props} />
}
const IconEye = (props: any) => {
  return <AiOutlineEye {...props} />
}

const IconArrowLeft = (props: any) => {
  return <MdKeyboardArrowLeft {...props} />
}

const IconArrowRight = (props: any) => {
  return <MdKeyboardArrowRight {...props} />
}
export { IconAdd, IconMinus, IconSort, IconDelete, IconEdit, IconList, IconEye, IconArrowLeft, IconArrowRight };
