import React from 'react';
import Search from '../Search/Search';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../SideDrawer/Backdrop';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    console.log(this.props)
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <header className="header">
        <div className="header-content">
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <div className="header-left">
            <DrawerToggleButton
              click={this.drawerToggleClickHandler}
              show={this.state.sideDrawerOpen}
            />
            <Link to="/">
              <img
                src="/images/movie-db-logo.svg"
                alt=""
                className="movie-info-logo"
              />
            </Link>
          </div>
          <div className="header-right">
            <Search searchMovies={this.props.searchMovies}/>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
