import React from "react";
import {
  AiOutlineInfoCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { Row, Col, Select, Checkbox, Input, DatePicker } from "antd";
import "./index.scss";
import Button from "../../../../../shared/component/Button/Button";
import ModalForm from "../../../../../shared/component/Modal/Modal";

const FormUpdateSchoolYear = () => {
  const { Option } = Select;
  const date = [2020, 2021, 2022];
  
  return (

      <div className="form-layout form-school">
        <h1 className="title-28">Thiết lập niên khoá</h1>
        <div className="form-school__add">
          <div className="form-school__add-year">
            <Row>
              <Col span={12}>
                <h2
                  className="form-school__title-16"
                  style={{ marginBottom: "16px" }}
                >
                  Niên khóa:
                </h2>
                <div
                  className="form-school__add-year__select"
                  style={{ display: "flex" }}
                >
                  <Select className='select' value={2020}>
                    {
                      date.map((item, index) => (
                        <Option value={item} key={index} >{item}</Option>
                      ))
                    }
                  </Select>
                  <h3
                    className="form-school__title-16"
                    style={{
                      fontWeight: "400",
                      margin: "0 8px",
                    }}
                  >
                    đến:
                  </h3>
                  <Select className='select' value={2021}>
                    {
                      date.map((item, index) => (
                        <Option value={item} key={index} >{item + 1}</Option>
                      ))
                    }
                  </Select>
                </div>
              </Col>

              <Col span={12}>
                <div className="form-school__add-year__check">
                  <Checkbox style={{ marginRight: "10px" }}></Checkbox>
                  <h3
                    className="form-school__title-16"
                    style={{ marginBottom: "0" }}
                  >
                    Kế thừa dữ liệu:
                  </h3>
                  <Select className='select' placeholder='Niên Khóa'>
                    {
                      date.map((item, index) => (
                        <Option value={item} key={index} >{item + 1}</Option>
                      ))
                    }
                  </Select>
                </div>
                <div style={{ display: "flex", paddingLeft: "73px" }}>
                  <AiOutlineInfoCircle
                    style={{
                      color: "orange",
                      marginRight: "10px",
                      width: 20,
                      height: 20,
                    }}
                  />

                  <div className="form-school__content">
                    <span style={{ display: "block" }}>
                      Dữ liệu được kế thừa bao gồm các thông tin:
                    </span>
                    <span style={{ display: "block" }}>
                      - Thông tin học viên và Danh sách lớp học
                    </span>
                    <span style={{ display: "block" }}>- Thông tin môn học</span>
                    <span style={{ display: "block" }}>
                      - Phân công giảng dạy
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="border-bottom"></div>
          <h2
            className="form-school__title-18-orange"
            style={{ marginBottom: "24px" }}
          >
            Cài đặt thời gian
          </h2>
          <div className="form-school__add-setting">
            <div className="form-school__add-setting__name">
              <AiFillMinusCircle
                className="form-school__add-setting__icon"
                style={{ width: "36px", height: "24px" }}
                onClick={() => console.log(123)}
              />
              <h3
                className="form-school__title-16"
                style={{ marginBottom: 0, width: "118px" }}
              >
                Tên học kì:
              </h3>
              <Input style={{ marginRight: "9px" }} placeholder="Enter value" />
            </div>

            <div className="form-school__add-setting__date">
              <div className="form-school__add-setting__date-start">
                <h3 className="title-16" style={{ margin: "0 15px" }}>
                  Từ
                </h3>
                <DatePicker className="select__calendar" picker="date" />
              </div>
              <div className="form-school__add-setting__date-end">
                <h3 className="title-16" style={{ margin: "0 15px" }}>
                  đến
                </h3>
                <DatePicker className="select__calendar" picker="date" />
              </div>
            </div>
          </div>
          <div className="form-school__add-setting">
            <div className="form-school__add-setting__name">
              <AiFillMinusCircle
                className="form-school__add-setting__icon"
                style={{ width: "36px", height: "24px" }}
                onClick={() => console.log(123)}
              />
              <h3
                className="form-school__title-16"
                style={{ marginBottom: 0, width: "118px" }}
              >
                Tên học kì:
              </h3>
              <Input style={{ marginRight: "9px" }} placeholder="Enter value" />
            </div>

            <div className="form-school__add-setting__date">
              <div className="form-school__add-setting__date-start">
                <h3 className="title-16" style={{ margin: "0 15px" }}>
                  Từ
                </h3>
                <DatePicker className="select__calendar" picker="date" />
              </div>
              <div className="form-school__add-setting__date-end">
                <h3 className="title-16" style={{ margin: "0 15px" }}>
                  đến
                </h3>
                <DatePicker className="select__calendar" picker="date" />
              </div>
            </div>
          </div>
          <div className="form-school__add-field">
            <AiFillPlusCircle
              className="form-school__add-field__icon"
              onClick={() => console.log(123)}
            />
            <h3
              className="form-school__title-16"
              style={{ marginBottom: "0", width: "118px", color: "#0B80EC" }}
            >
              Thêm học kì mới
            </h3>
          </div>
          <div className="form-layout-btn">
            <Button
              style={{ marginRight: "32px" }}
              onClick={() => console.log(123)}
              variant="secondary"
            >
              Hủy
            </Button>
            <Button onClick={() => console.log(123)} variant="primary">
              Lưu
            </Button>
          </div>
        </div>
      </div>
  );
};

export default FormUpdateSchoolYear;
