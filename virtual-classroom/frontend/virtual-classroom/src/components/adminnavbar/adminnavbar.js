import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import studentImg from "../../assets/images/student.png";
import adminImg from "../../assets/images/admin.png"
import "./navbar.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function AdminNavBar() {
  return (
    <>
      {/* navbar starts here */}
      <Container>
        <Row>
          <Col className="studentDash">
            <img
              src={adminImg}
              className="img-fluid dash-img"
              alt="studentLogin"
            ></img>
            <p>Admin</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="navbar flex-column">
              <ul>
                <li>Home</li>
                
                <li>Study material</li>
                <li>Video lectures</li>
                <li>Q&A</li>
                <button className="mb-2">Logout</button>
                
                <Link to={`/AdminEdit`} className="create-new">Edit Profile</Link>
                <Link to={`/AdminHome`} className="create-new">Home</Link>
                <Outlet />
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminNavBar;