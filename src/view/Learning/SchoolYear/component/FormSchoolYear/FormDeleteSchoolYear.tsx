import React from "react";
import Button from "../../../../../shared/component/Button/Button";

import "./index.scss";

interface IFormDeleteLearnProps {
  title?: string;
} 

type FormDeleteLearnProps = {
  setIsModalDelete?: any
} & IFormDeleteLearnProps

const FormDeleteSchoolYear: React.FC<FormDeleteLearnProps> = ({
  title, setIsModalDelete
}: FormDeleteLearnProps) => {
  return (
    <div className="form-layout form-school-delete">
      <h2 className="title-28" style={{ justifyContent: "center", margin: 0 }}>
           {`${title ? title : 'Xóa niên khoá'}`} 
      </h2>
      <p className="title-16 form-school-delete__content =">
        Xác nhận muốn xoá niên khoá này và toàn bộ thông tin bên trong? Sau khi
        xoá sẽ không thể hoàn tác.
      </p>
      <div className="form-layout-btn">
        <Button variant="secondary" style={{ marginRight: "32px" }}
          onClick = {() => setIsModalDelete(false)}
        >
          
          Hủy
        </Button>
        <Button variant="primary"> Xác nhận</Button>
      </div>
    </div>
  );
};

export default FormDeleteSchoolYear;
