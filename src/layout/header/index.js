import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Index = ({ history }) => {
  const handleClickLink = useCallback(
    (e, link) => {
      e.preventDefault();
      history.push(link);
    },
    [history]
  );
  return (
    <Navbar color="light" expand="md" light>
      <NavbarBrand href="/">Swapiku</NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="#" onClick={(e) => handleClickLink(e, "/")}>
              Films
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={(e) => handleClickLink(e, "/people")}>
              People
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default withRouter(Index);
