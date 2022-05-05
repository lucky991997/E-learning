import { Col, Form, Input, Row, Select } from "antd";
import React, { useEffect } from "react";
import { useFormik } from 'formik'
import Button from "../../../../../shared/component/Button/Button";
import { IModal } from "../../../../../shared/component/Modal/Modal";
import { IPoint } from '../../../../../core/enums/EnumsPoint'
import { useDispatch } from "react-redux";
import { addPoint } from "../../../../../core/action/PointAction";


const FormPoint = ({ setIsModalVisible }: IModal) => {

  const dispatch = useDispatch()
  const { Option } = Select;
  const point = [1, 2, 3];

  const initialValues = {
    pointTyp: '',
    heSo: '1',
    sem1: '3',
    sem2: '3',
  }

  //@ts-ignore
  const formik = useFormik({
    initialValues,
    onSubmit: (values: any) => {
      const addPoint = {
        pointTyp: `${values.pointTyp}`,
        heSo: `${values.heSo}`,
        sem1: `${values.sem1}`,
        sem2: `${values.sem2}`,
      }
    },
  })


  const handleAddForm = () => {
    if(formik.values.pointTyp !== '' && formik.values.heSo !== '') {
      setIsModalVisible(false)
      //@ts-ignore
      dispatch(addPoint(formik.values))
    }
  }

  return (
    <div className="form-layout form-point" style={{ width: '884px', minHeight: '390px', }}>
      <h2 className="title-28 j-center mb-24">Thêm loại điểm mới</h2>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
        onFinish={formik.handleSubmit}
      >
        <Row>
          <Col span="16">
            <div className="form-input-required">
              <Form.Item
                label="Tên loại điểm:"
                name="pointTyp"
                rules={[
                  {
                    required: true,
                    message: "please enter name point",
                  },
                ]}
              >
                <Input value={formik.values.pointTyp} style={{ width: "336px" }} onChange={formik.handleChange} />
              </Form.Item>
            </div>
          </Col>
          <Col span="8">
            <div className="form-input">
              <Form.Item label="Hệ số:" name="heSo">
                <Select
                  onChange={(value) => formik.setFieldValue("heSo", value)}
                >
                  {point.map((item, index) => (
                    <Option key={item}>{item}</Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </Col>
        </Row>
        <div className="border-bottom" style={{ marginTop: 0 }}></div>
        <h3 className="title-18-orange mb-24">Số cột điểm tối thiểu</h3>
        <div className="form-input">
          <Row className="mb-48">
            <Col span="8">
              <Form.Item label="Học kì I:" name="sem1">
                <Input value={formik.values.sem1} style={{ width: "96px", marginLeft: '16px' }} onChange={formik.handleChange} />
              </Form.Item>
            </Col>
            <Col span="8">
              <Form.Item label="Học kì II:" name="sem2">
                <Input value={formik.values.sem2} style={{ width: "96px", marginLeft: '16px' }} onChange={formik.handleChange} />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <Form.Item wrapperCol={{ offset: 0 }}>
          <div className="form-layout-btn">
            <Button variant="secondary" styles="mr-32"
              onClick={() => setIsModalVisible(false)}
            >
              Hủy
            </Button>
            <Button type="submit" variant="primary" onClick={() => handleAddForm()}>Lưu</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormPoint;
