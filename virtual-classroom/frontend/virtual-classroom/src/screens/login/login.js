import React from "react";
import "./login.css";
import { Container, Row, Card, Form, Button, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import studentImg from "../../assets/images/student.png";
import facultyImg from "../../assets/images/faculty.png";
import adminImg from "../../assets/images/admin.png";

function Login() {
  const [key, setKey] = useState("home");
  return (
    <>
      <Container>
        <Card style={{ width: "22rem", borderRadius: "6px" }} className="card">
          <Card.Body>
            <Row className="icon-row mb-5">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="tabs"
              >
                <Tab
                  eventKey="home"
                  title={
                    <span>
                      <img
                        src={studentImg}
                        className="img-fluid mb-2 tab-imgs"
                        alt="Student icon"
                      ></img>
                      <br></br>

                      <h5>Student</h5>
                    </span>
                  }
                >



                  {/* student login form */}
                  <Row className="mb-3">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button variant="success" type="button">
                  Login
                </Button>
              </Form>
            </Row>
            <Card.Link>
                <Link to={`/studentRegistration`} className="create-new">Create new</Link>
                <Outlet />
            </Card.Link>


                </Tab>
                <Tab
                  eventKey="profile"
                  title={
                    <span>
                      <img
                        src={facultyImg}
                        className="img-fluid mb-2 tab-imgs"
                        alt="Faculty icon"
                      ></img>
                      <br></br>
                      <h5>Faculty</h5>
                    </span>
                  }
                >


                  {/* facult login form */}

                  <Row className="mb-3">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button variant="success" type="button">
                  Login
                </Button>
              </Form>
            </Row>
            <Card.Link>
                <Link to={`/facultyRegistration`} className="create-new">Create new</Link>
                <Outlet />
            </Card.Link>



                </Tab>
                <Tab
                  eventKey="contact"
                  title={
                    <span>
                      <img
                        src={adminImg}
                        className="img-fluid mb-2 tab-imgs"
                        alt="Admin icon"
                      ></img>
                      <br></br>
                      <h5>Admin</h5>
                    </span>
                  }
                >
                    {/* admin login form */}
            <Row className="mb-3">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button variant="success" type="button">
                  Login
                </Button>
              </Form>
            </Row>
                </Tab>
              </Tabs>
            </Row>
            
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Login;