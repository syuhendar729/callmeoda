import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar() {
    return (
        <Navbar
            expand="lg"
            className="navbar-bg comic-neue-regular navbar-dark"
        >
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-text">
                    Syuhada Rantisi
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-5">
                        <Nav.Link as={Link} to="/" className="navbar-text pe-3">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/projects"
                            className="navbar-text pe-3"
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/achievement"
                            className="navbar-text pe-3"
                        >
                            Achievement
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className="navbar-text pe-3"
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
