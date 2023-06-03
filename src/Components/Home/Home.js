import React from 'react'
import { Button } from 'antd';
import "../Home/Home.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row } from 'antd';

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
    // <div className='verticalNavbar'>
    //   <div className='navItems'>
    //     <NavLink activeclassname="active" to={"/DailyAttendance"}>Daily Attendance</NavLink>
    //   </div>
    //   <div className='navItems'>
    //     <NavLink activeclassname="active" to={"/RTOUpdates"}>Monthly RTO updates</NavLink>
    //   </div>
    //   <div className='navItems'>
    //     <NavLink activeclassname="active" to={"/admin"}>Admin</NavLink>
    //   </div>
    //   <div className='navItems'>
    //     <NavLink activeclassname="active" to={"/report"}>Report</NavLink>
    //   </div>
    //   <div className='footer'>

    //     <Button onClick={logout}>
    //       Logout
    //     </Button>
    //   </div>
    // </div>
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
    </div>
  );
}

export default Home
