import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Appbar.css";

function Appbar() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        {/* brand  */}
        <Navbar.Brand className="navbarBrand" href="#home">
          Picture<span>Verse</span>
        </Navbar.Brand>

        <Navbar.Toggle
          style={{ backgroundColor: "#7147bc" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav" style={{ color: "white" }}>
          <Nav className="ms-auto align-items-center">
            <Nav.Link className=" px-3">
              <InputGroup
                className="inputBox"
                style={{ display: "flex", alignContent: "center" }}
              >
                <Form.Control
                  placeholder="Search.. "
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  style={{ top: "19px" }}
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  Go!
                </Button>
              </InputGroup>
              {/* three links of Navbar  */}
            </Nav.Link>
            <Nav.Link
              style={{ color: "#aaaaaa" }}
              className="links  px-3"
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link className="links px-3" href="#link">
              Latest
            </Nav.Link>
            <Nav.Link className="links px-3" href="#link">
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
