import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"


const NavBarApp = () => {
    return (
        <>
            < Navbar className="navBg" bg="light" expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/" ><img
                        alt=""
                        src="../Img/logo.png"
                       width="100"
                       height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/Blog" >Blog</Nav.Link>
                            <Nav.Link as={Link} to="/About" >Sobre</Nav.Link>
                            <Nav.Link as={Link} to="/Contact" >Contato</Nav.Link> 
                            <Nav.Link as={Link} to="/Login" >Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  
        <section>
            <Outlet></Outlet>
        </section>
        </>
    )
}
export default NavBarApp



