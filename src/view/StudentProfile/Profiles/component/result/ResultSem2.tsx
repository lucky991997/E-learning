import { Table } from 'antd'
import React from 'react'

const ResultSem2 = () => {
  const data = [
    {
      key:'1',
      name:'Toán Đại Số',
      chuyencan: 9,
      daugio: 9,
      phut15: 9,
      phut45: 9,
      final: 9,
      total: 9,
    },
    {
      key:'2',
      name:'Toán Hình Học',
      chuyencan: 8,
      daugio: 8,
      phut15: 8,
      phut45: 8,
      final: 8,
      total: 8,
    },
    {
      key:'3',
      name:'Sinh Học',
      chuyencan: 8,
      daugio: 8,
      phut15: 8,
      phut45: 8,
      final: 8,
      total: 8,
    },
    {
      key:'4',
      name:'Vật Lý',
      chuyencan: 8,
      daugio: 10,
      phut15: 10,
      phut45: 10,
      final: 10,
      total: 10,
    },
    {
      key:'5',
      name:'Địa Lý',
      chuyencan: 7,
      daugio: 7,
      phut15: 7,
      phut45: 7,
      final: 7,
      total: 7,
    },
    {
      key:'6',
      name:'Tiếng Anh',
      chuyencan: 10,
      daugio: 10,
      phut15: 10,
      phut45: 10,
      final: 10,
      total: 10,
    },
    {
      key:'7',
      name:'Ngữ văn',
      chuyencan: 10,
      daugio: 10,
      phut15: 10,
      phut45: 10,
      final: 10,
      total: 10,
    },
    {
      key:'8',
      name:'Lịch  Sử',
      chuyencan: 10,
      daugio: 10,
      phut15: 10,
      phut45: 10,
      final: 10,
      total: 10,
    },
  
  ]
  const columns = [
    {
      title: 'Môn học',
      key:'name',
      dataIndex: 'name',
    },
    {
      title: 'Chuyên Cần',
      key:'chuyencan',
      dataIndex: 'chuyencan',
    },
    {
      title: 'Kiểm tra đầu giờ',
      key:'daugio',
      dataIndex: 'daugio',
    },
    {
      title: '15 phút',
      key:'phut15',
      dataIndex: 'phut15',
    },
    {
      title: '45 phút',
      key:'phut45',
      dataIndex: 'phut45',
    },
    {
      title: 'Cuối kỳ',
      key:'final',
      dataIndex: 'final',
    },
    {
      title: 'Điểm trung bình ',
      key:'total',
      dataIndex: 'total',
    }
   

  ]
  return (
    <div className="result-sem2">
      <div className="table-content">
        <Table columns={columns} dataSource={data}  pagination={false}/>
      </div>

    </div>
  )
}

export default ResultSem2