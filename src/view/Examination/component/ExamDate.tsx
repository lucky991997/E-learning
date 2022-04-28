import { Col, Row, Calendar, Badge } from 'antd'
import moment from 'moment';
import React from 'react'
import { IconArrowLeft, IconArrowRight, IconDelete, IconEdit } from '../../../shared/component/Icon/Icon'

const ExamDate = () => {
  // const day = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7',]
  // const data = [
  //   {
  //     row: 1,
  //     col: [1, 2, 3, 4, 5, 6,]
  //   },
  //   {
  //     row: 2,
  //     col: [1, 2, 3, 4, 5, 6,]
  //   },
  //   {
  //     row: 3,
  //     col: [1, 2, 3, 4, 5, 6,]
  //   },
  //   {
  //     row: 4,
  //     col: [1, 2, 3, 4, 5, 6,]
  //   },
  //   {
  //     row: 5,
  //     col: [1, 2, 3, 4, 5, 6,]
  //   },
  // ]
  function getListData(value: any) {
    let listData;
    switch (value.date()) {
      case 4:
        listData = [
          { type: "success", content: 'coi kết thúc thi' },
        ]
        break
      case 6:
        listData = [
          { type: "success", content: 'tham gia lễ hội' },
        ];
        break;
      case 12:
        listData = [
          { type: "success", content: 'hướng dẩn luận' },
        ];
        break;
      case 16:
        listData = [
          { type: "success", content: 'trực khoa' },
        ];
        break;
      case 17:
        listData = [
          { type: "success", content: 'trực khoa' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value: any) {
    const listData = getListData(value);
    return (
      <ul className="events">

        {listData.map(item => (

          <li key={item.content} style={{ listStyle: 'none', textAlign: 'left' }}>
            <Badge status="success" text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function onPanelChange(value: any, mode: any) {
    console.log(value.format('YYYY-MM-DD'), mode);
  }
  return (
    <div className="exam__date">
      <Row>
        <Col span='20'>
          <div className="exam__date-calendar">
            <Calendar dateCellRender={dateCellRender} onPanelChange={onPanelChange} />
          </div>
        </Col>

        {/* <Col span="20">
          <div className="exam__date__list">
            <h3 className="title-22 mb-16">Danh sách bài thi</h3>
            <div className="exam__date__list-content">
              <div className="exam__date__list__title">
                <IconArrowLeft className="icon" />
                <h2 className="title-28" style={{ margin: '0 48px' }}>Tháng 8 - 2020</h2>
                <IconArrowRight className="icon" />
              </div>
              <div style={{ display: 'flex' }}>
                {
                  day.map((item, index) => (
                    <div className="exam__date__list-day" key={index}>
                      <h3 className="title-16-bold">{item}</h3>
                    </div>
                  ))
                }
              </div>
              {
                data.map((item, index) => (
                  <Row key={index} className="row">


                  </Row>
                ))
              }
            </div>
          </div>
        </Col> */}
        <Col span="4">
          <div className="exam__date__edit">
            <div className="exam__date__edit__title">
              <h1 className="main-tile" style={{ fontSize: '64px' }}>15</h1>
              <h3 className="title-22">Thursday</h3>
              <h3 className="title-18-black mb-24">January, 2020</h3>
            </div>
            <div className="exam__date__edit__content">
              <div className="exam__date__edit-subject mb-12">
                <Row className="mb-8" style={{ display: 'flex', alignItems: 'center' }}>

                  <h2 className="title-22" style={{ color: '#49C510', margin: '16px 36px 12px 0' }}>Toán đại số</h2>
                  <IconEdit className='icon mr-16' />
                  <IconDelete className='icon' />
                </Row>
                <Row className="mb-8">
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Giáo viên</h3>
                  <h3 className="title-16">Lương Hoàng D</h3>
                </Row>
                <Row>
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Thời lượng:</h3>
                  <h3 className="title-16">45 phút</h3>
                </Row>
                <Row className="mb-8">
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Phân loại:</h3>
                  <h3 className="title-16">Giữa kỳ</h3>
                </Row>
                <Row className="mb-32">
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Hình thức:</h3>
                  <h3 className="title-16">Tự luận</h3>
                </Row>

              </div>

              <div className="exam__date__edit-subject mb-12">
                <Row className="mb-8" style={{ display: 'flex', alignItems: 'center' }}>

                  <h2 className="title-22" style={{ color: '#49C510', margin: '16px 36px 12px 0' }}>Toán đại số</h2>
                  <IconEdit className='icon mr-16' />
                  <IconDelete className='icon' />
                </Row>
                <Row className="mb-8">
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Giáo viên</h3>
                  <h3 className="title-16">Lương Hoàng D</h3>
                </Row>
                <Row>
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Thời lượng:</h3>
                  <h3 className="title-16">45 phút</h3>
                </Row>
                <Row className="mb-8">
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Phân loại:</h3>
                  <h3 className="title-16">Giữa kỳ</h3>
                </Row>
                <Row className="mb-32">
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Hình thức:</h3>
                  <h3 className="title-16">Tự luận</h3>
                </Row>

              </div>
              <div className="exam__date__edit-subject mb-12">
                <Row className="mb-8" style={{ display: 'flex', alignItems: 'center' }}>

                  <h2 className="title-22" style={{ color: '#49C510', margin: '16px 36px 12px 0' }}>Toán đại số</h2>
                  <IconEdit className='icon mr-16' />
                  <IconDelete className='icon' />
                </Row>
                <Row className="mb-8">
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Giáo viên</h3>
                  <h3 className="title-16">Lương Hoàng D</h3>
                </Row>
                <Row>
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Thời lượng:</h3>
                  <h3 className="title-16">45 phút</h3>
                </Row>
                <Row className="mb-8">
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Phân loại:</h3>
                  <h3 className="title-16">Giữa kỳ</h3>
                </Row>
                <Row className="mb-32">
                  <h3 className="title-16-bold" style={{ width: '100px' }}>Hình thức:</h3>
                  <h3 className="title-16">Tự luận</h3>
                </Row>

              </div>
            </div>
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default ExamDate