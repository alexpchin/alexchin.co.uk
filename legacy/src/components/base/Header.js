import styled from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import Headroom from 'react-headroom';
import {
  Navbar,
  NavbarLink,
  NavbarALink,
  NavbarMenu,
  NavbarBurger,
} from '../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// This is the second part of the title, i.e. Home - ↓
const title = 'Web & App Developer, Teacher & Entrepreneur';

const FixedHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`;

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  toggleClass() {
    this.setState(prevState => {
      return {
        open: !prevState.open,
      };
    });
  }

  closeMenu() {
    this.setState(prevState => {
      return {
        open: false,
      };
    });
  }

  render() {
    return (
      <FixedHeader>
        <Headroom>
          <Helmet titleTemplate={`%s - ${title}`} />
          {/* Removed fixed="top" so that .has-navbar-fixed-top is not added to html */}
          <Navbar className={this.state.open ? 'is-active' : null}>
            <Navbar.Brand>
              <NavbarBurger
                className={this.state.open ? 'is-active' : null}
                onClick={this.toggleClass.bind(this)}
              />
            </Navbar.Brand>
            <NavbarMenu className={this.state.open ? 'is-active' : null}>
              <Navbar.Container position="start">
                {/* At somepoint try to remove className in favour of Navbar.Item */}
                {this.props.routes.map((route, i) => (
                  <NavbarLink
                    exact
                    key={i}
                    to={route.path}
                    className="navbar-item"
                    onClick={this.closeMenu.bind(this)}
                  >
                    {route.title}
                  </NavbarLink>
                ))}
              </Navbar.Container>
              <Navbar.Container position="end">
                {this.props.socials.map((social, i) => (
                  <NavbarALink
                    key={i}
                    href={social.path}
                    target="_blank"
                    className="navbar-item"
                  >
                    <FontAwesomeIcon
                      icon={['fab', `${social.icon}`]}
                      size="lg"
                    />
                  </NavbarALink>
                ))}
              </Navbar.Container>
            </NavbarMenu>
          </Navbar>
        </Headroom>
      </FixedHeader>
    );
  }
}

export { Header };
