import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Nav, Navbar } from 'reactstrap';
import bn from 'utils/bemnames';

const bem = bn.create('header');

class Header extends React.Component {

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {
    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <MdMenu size={25} onClick={this.handleSidebarControlButton} />
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
