import React from "react";
import { IProfile } from "../../../view/StudentProfile/Profiles/component/ProfileList";
import Button from "../Button/Button";

import "./form-main.scss";



type IFormDeleteProps = {
  setIsModalDelete: any
  data?: IProfile[]
}
const FormDeleteMain = ({ setIsModalDelete, data }: IFormDeleteProps) => {
  const handleDelete = () => {
    if (data) {
      console.log(data.pop())
    }
  }
  return (
    <div className="form-layout form-delete-main">
      <h2 className="title-28 mb-16" style={{ justifyContent: "center" }}>
        Xóa
      </h2>
      <span
        className="title-16 mb-32"
        style={{ width: "358px", marginLeft: "18px" }}
      >
        Xác nhận muốn xoá những thông tin đã chọn? Sau khi xoá sẽ không thể hoàn
        tác.
      </span>
      <div className="form-layout-btn">
        <Button
          onClick={() => setIsModalDelete(false)}
          variant="secondary"
          styles="mr-32"
        >
          Hủy
        </Button>
        <Button variant="primary" onClick={() => handleDelete()}>
          Xóa
        </Button>
      </div>
    </div>
  );
};

export default FormDeleteMain;
