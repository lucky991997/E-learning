import React from "react";
import Button from "../Button/Button";

import "./form-main.scss";

export interface IFormDeleteProps {
  handleCancel: () => void;
  handleDelete: () => void;
}

const FormDeleteMain: React.FC<IFormDeleteProps> = ({
  handleCancel,handleDelete
}: IFormDeleteProps) => {

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
          onClick={() => handleCancel()}
          variant="secondary"
          styles="mr-32"
        >
          Hủy
        </Button>
        <Button onClick={() => handleDelete()} variant="primary">
          Xóa
        </Button>
      </div>
    </div>
  );
};

export default FormDeleteMain;
