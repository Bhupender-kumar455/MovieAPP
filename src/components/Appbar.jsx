import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Appbar.css";
import { useEffect, useState } from "react";

function Appbar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  return (
    <Navbar expand="lg" className="Navbar">
      <Container className="container">
        {/* brand  */}
        <Navbar.Brand className="navbarBrand" href="#home">
          <p className="mobile-text">
            P<span>V</span>
          </p>
          <p className="laptop-text">
            Picture<span>Verse</span>
          </p>
        </Navbar.Brand>
        <InputGroup className="inputBox">
          <Form.Control
            placeholder="Search.. "
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button
            className="search-btn"
            style={{ top: "21px" }}
            variant="outline-secondary"
            id="button-addon2"
          >
            Go!
          </Button>
        </InputGroup>

        <Navbar.Toggle
          style={{ backgroundColor: "#7147bc" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav" style={{ color: "white" }}>
          <Nav className="ms-auto align-items-center">
            <Nav.Link className=" px-3">
              {/* three links of Navbar  */}
            </Nav.Link>
            <Nav.Link
              style={{ color: "#aaaaaa", fontSize: "16px" }}
              className="links  px-3"
              href="#home"
            >
              Watch2gether
            </Nav.Link>
            <Nav.Link
              className="links px-3 small"
              style={{ fontSize: "16px" }}
              href="#link"
            >
              Latest
            </Nav.Link>
            <Nav.Link
              className="links px-3 small"
              style={{ fontSize: "16px" }}
              href="#link"
            >
              Random
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
