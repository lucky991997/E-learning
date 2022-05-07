import React, { ReactChild, useState } from "react";
import {
  AiOutlineInfoCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { Row, Col, Select, Checkbox, Input, DatePicker } from "antd";
import "./index.scss";
import Button from "../../../../../shared/component/Button/Button";
import { MdDateRange } from "react-icons/md";
import { IModal } from "../../../../../shared/component/Modal/Modal";
import Alert from "../../../../../shared/component/Alert/Alert";


export interface TestProp {
  title: string,
  from: string,
  to: string,
}
const FormAddSchoolYear = ({ setIsModalVisible }: IModal) => {
  const { Option } = Select;
  const date = ["2020", "2021", "2022"];

  const showAddFieldData: Array<TestProp> = []
  const handleShow = {
    title: 'Tên học kì:',
    from: 'từ',
    to: 'đến',
  }
  const [addFieldData, setAddFieldData] = useState<typeof showAddFieldData>([handleShow])
  const handleAddfield = () => {
    if (addFieldData.length < 5) {
      showAddFieldData.push(handleShow)
      setAddFieldData(prev => [...prev, ...showAddFieldData])
    } else {
      alert('add tối da là 5')
    }

  }
  const handleRemoveAddfield = (indexArray: number) => {
    console.log(addFieldData.length)
    if (addFieldData.length > 1) {
      const indexItem = addFieldData.filter((item, index) => index !== indexArray)
      setAddFieldData([...indexItem])
    }
    else {
      alert('remove tối thiểu còn lại 1')
    }

  }

  console.log(addFieldData.length)

  return (
    <div className="form-layout form-school">
      <h2 className="title-28 j-center mb-24">Thiết lập niên khoá</h2>
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

              <div className="select">
                <Select className='form-school-select' value={2020}>
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
                <Select className='form-school-select' value={2021}>
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
                  style={{ margin: '0 16px 0 0' }}
                >
                  Kế thừa dữ liệu:
                </h3>
                <Select className='form-school-select' placeholder='Niên Khóa'>
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
        <div className="border-bottom mt-16"></div>
        <h2
          className="form-school__title-18-orange"
          style={{ marginBottom: "24px" }}
        >
          Cài đặt thời gian
        </h2>

        {
          addFieldData.map((item: any, index: number) => (
            <div key={index} className="form-school__add-setting">
              <div className="form-school__add-setting__name">
                <AiFillMinusCircle
                  className="form-school__add-setting__icon"
                  style={{
                    width: "36px", height: "24px",
                    color: `${addFieldData.length === 1 ? '#F2F2F2' : '#0B80EC'}`,
                    cursor: `${addFieldData.length === 1 ? 'default' : 'pointer'}`
                  }}
                  onClick={() => handleRemoveAddfield(index)}
                />
                <h3
                  className="form-school__title-16"
                  style={{ marginBottom: 0, width: "118px" }}
                >
                  {item.title}
                </h3>
                <Input style={{ marginRight: "9px" }} placeholder="Enter value" />
              </div>

              <div className="form-school__add-setting__date">
                <div className="form-school__add-setting__date-start">
                  <h3 className="title-16" style={{ margin: "0 15px" }}>
                    {item.from}
                  </h3>
                  <DatePicker className="select__calendar" picker="date" suffixIcon={<MdDateRange className="select__calendar-icon" style={{ right: '3%' }} />} />
                </div>
                <div className="form-school__add-setting__date-end">
                  <h3 className="title-16" style={{ margin: "0 15px" }}>
                    {item.to}
                  </h3>
                  <DatePicker className="select__calendar" picker="date" suffixIcon={<MdDateRange className="select__calendar-icon" />} />
                </div>
              </div>
            </div>
          ))
        }

        <div className="form-school__add-field" style={{ cursor: 'pointer' }} onClick={() => handleAddfield()}>
          <AiFillPlusCircle
            className="form-school__add-field__icon"
            style={{ color: `${addFieldData.length === 5 ? 'gray' : '#0B80EC'}` }}
            onClick={() => console.log(123)}
          />
          <h3
            className="form-school__title-16"
            style={{ marginBottom: "0", width: "118px", color: `${addFieldData.length === 5 ? 'gray' : '#0B80EC'}`}}
          >
            Thêm học kì mới
          </h3>
        </div>

        <div className="form-layout-btn">
          <Button
            style={{ marginRight: "32px" }}
            onClick={() => setIsModalVisible(false)}
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
export default FormAddSchoolYear;
