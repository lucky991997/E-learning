import { Col, Input, Row, Upload } from "antd";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";
import Button from "../Button/Button";

import "./form-main.scss";

const FormExport: React.FC = () => {
  return (
    <div className="form-layout form-export">
      <h2 className="title-28 mb-24 j-center">Tải lên file </h2>

      <Row className="mb-16">
        <Col span="6">
          <h3 className="title-16-bold">Tệp đính kèm:</h3>
        </Col>
        <Col span="12">
          <Input
            suffix={<ImAttachment className="form-export__attach-icon" />}
          ></Input>
        </Col>
        <Col span="6">
          <Upload>
            <div className="form-export__upload">
              <h3 className="title-16">Chọn tệp tải lên...</h3>
            </div>
          </Upload>
        </Col>
      </Row>

      <Row className="mb-48">
        <Col span="6">
          <h3 className="title-16-bold">Tải file mẫu:</h3>
        </Col>
        <Col span="18">
          <div className="form-export__download">
            <AiOutlineDownload className="form-export__download-icon"/>
            <h3 className="title-16">[Tải xuống file mẫu]</h3>
          </div>
        </Col>
      </Row>

      <div className="form-layout-btn">
        <Button
          style={{ width: "192px", marginRight: "32px" , background:'#fff'}}
          variant="secondary"
        >
         <span style={{color:'#FF7506'}}>Hủy</span> 
        </Button>
        <Button style={{ width: "192px" }} variant="primary">
          Tải lên
        </Button>
      </div>
    </div>
  );
};

export default FormExport;
