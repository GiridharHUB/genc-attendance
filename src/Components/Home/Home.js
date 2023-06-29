import React from 'react'
import "../Home/Home.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col } from 'antd';
const { Meta } = Card;

function Home() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear()
    navigate("/")
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  return (
    <div className='home'>
      <Row gutter={16}>
        <Col span={8}>
          <Link to={"/DailyAttendance"}>
            <Card title="Daily Attendance" className='card'>
              Mark your Daily Attendace Here!
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to={"/RTOUpdates"}>
            <Card title="Monthly RTO" className='card'>
              Enter Monthly RTO Plan Dates
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to={"/admin"}>
            <Card title="Admin" className='card'>
              Admin Panel
            </Card>
          </Link>
        </Col>
      </Row>

      <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      title="Daily Attendance"
      description="Mark your Daily Attendace Here!"
    />
  </Card>
    </div>
  );
}

export default Home
