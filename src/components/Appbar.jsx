import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Appbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
function Appbar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = (value) => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((item) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value)
          );
        });
        setResult(result);
      });
  };

  function handleChange(value) {
    setInput(value);
    fetchData(value);
  }

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
          <FontAwesomeIcon
            style={{ color: "#888181", fontSize: "17px" }}
            icon={faSearchengin}
          />
          <Form.Control
            className="input"
            placeholder="Search Movies..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="search-feed">
            {result.map((item, index) => {
              return (
                <div className="search-card" key={index}>
                  <img src={item.image.medium} alt="logo" />
                  <div className="text">
                    <a
                      href={item.url}
                      className="movieName"
                      style={{
                        color: "white",
                        marginLeft: "10px",
                        width: "100%",
                      }}
                    >
                      {item.name}
                    </a>
                    <h6 style={{ color: "#dddddd", marginLeft: "10px" }}>
                      <FontAwesomeIcon
                        style={{ fontSize: "12px", marginRight: "5px" }}
                        icon={faStar}
                      />
                      {item.rating.average}
                    </h6>
                    <h6 style={{ color: "#dddddd", marginLeft: "10px" }}>
                      {item.type}
                    </h6>
                  </div>
                  <h6 style={{ color: "#dddddd", marginLeft: "10px" }}>
                    Date: {item.premiered}
                  </h6>
                </div>
              );
            })}
          </div>
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
