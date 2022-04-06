import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import studentImg from "../../assets/images/student.png";
import adminImg from "../../assets/images/admin.png"
import facultyImg from "../../assets/images/faculty.png"
import "./navbar.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function FacultyNavBar() {
  return (
    <>
      {/* navbar starts here */}
      <Container>
        <Row>
          <Col className="FacultyDash">
            <img
              src={facultyImg}
              className="img-fluid dash-img"
              alt="FacultyLogin"
            ></img>
            <p>Faculty</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="navbar flex-column">
              <ul>
                <li>Home</li>
                <Link to={`/FacultyHome`} className="create-new"> Home </Link>
                <li>Study material</li>
                <li>Video lectures</li>
                <li>Q&A</li>
                <button className="mb-2">Logout</button>
                <Link to={`/FacultyEdit`} className="create-new">Edit Profile</Link>
                <Outlet />
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FacultyNavBar;