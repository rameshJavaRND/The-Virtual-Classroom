import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import studentImg from "../../assets/images/student.png";

import "./navbar.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      {/* navbar starts here */}
      <Container>
        <Row>
          <Col className="studentDash">
            <img
              src={studentImg}
              className="img-fluid dash-img"
              alt="studentLogin"
            ></img>
            <p>Student</p>
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
                <Link to={`/StudentEdit`} className="create-new">Edit Profile</Link>
                <Link to={`/StudentHome`} className="create-new">Home</Link>
                <Outlet />
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NavBar;