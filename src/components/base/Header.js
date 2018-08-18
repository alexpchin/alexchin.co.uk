import React from 'react';
import Helmet from 'react-helmet';
import { Navbar, NavbarLink, NavbarMenu, NavbarBurger } from '../common';

// This is the second part of the title, i.e. Home - ↓
const title = 'Web & App Developer, Teacher & Entrepreneur';

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

  render() {
    return (
      <header>
        <Helmet titleTemplate={`%s - ${title}`} />
        <Navbar fixed="top" className={this.state.open ? 'is-active' : null}>
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
                <NavbarLink key={i} to={route.path} className="navbar-item">
                  {route.title}
                </NavbarLink>
              ))}
            </Navbar.Container>
          </NavbarMenu>
        </Navbar>
      </header>
    );
  }
}

export { Header };
