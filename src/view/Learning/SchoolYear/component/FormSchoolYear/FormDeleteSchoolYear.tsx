import React from "react";
import Button from "../../../../../shared/component/Button/Button";

import "./index.scss";

interface IFormDeleteLearnProps {
  title?: string;
}

const FormDeleteSchoolYear: React.FC<IFormDeleteLearnProps> = ({
  title,
}: IFormDeleteLearnProps) => {
  return (
    <div className="form-layout form-school-delete">
      <h2 className="title-28" style={{ justifyContent: "center", margin: 0 }}>
           {`${title ? 'title' : 'Xóa niên khoá'}`} 
      </h2>
      <p className="title-16 form-school-delete__content">
        Xác nhận muốn xoá niên khoá này và toàn bộ thông tin bên trong? Sau khi
        xoá sẽ không thể hoàn tác.
      </p>
      <div className="form-layout-btn">
        <Button variant="secondary" style={{ marginRight: "32px" }}>
          {" "}
          Hủy
        </Button>
        <Button variant="primary"> Lưu</Button>
      </div>
    </div>
  );
};

export default FormDeleteSchoolYear;
