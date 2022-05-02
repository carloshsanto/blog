import { Navbar, Nav, Container,Button, Form ,FormControl  } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarApp = () => {
    return (
        <>
            < Navbar className="navBg" bg="dark" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/" >
                    <img
          alt=""
          src="../Img/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Blog React
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="container-fluid" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="align-items-center">
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/Blog" >Blog</Nav.Link>
                            <Nav.Link as={Link} to="/About" >Sobre</Nav.Link>
                            <Nav.Link as={Link} to="/Contact" >Contato</Nav.Link>
                            <Nav.Link as={Link} to="/Login" >Login</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Pesquisar"
          className="me-2"
          aria-label="Pesquisar"
        />
        <Button variant="outline-light">Pesquisar</Button>
      </Form>
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



