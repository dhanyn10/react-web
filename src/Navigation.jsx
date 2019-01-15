import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Navigasi extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
        
        this.state = {
            collapsedNavbar: false
        }
    }
    toggleNavbar()
    {
        this.setState({
            collapsedNavbar: !this.state.collapsedNavbar
        });
    }
    render()
    {
        return(
            <Navbar className="sticky-top navbar-dark bg-success mb-2" expand="md">
                <NavbarBrand href="/">React Web</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar}/>
                <Collapse isOpen={this.state.collapsedNavbar} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigasi;