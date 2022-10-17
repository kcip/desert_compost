import React, {Fragment} from 'react'
// import { NavLink } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <Fragment>
      <div className="container-navigation">
        <Navigation />
      </div>
    </Fragment>
  )
}

export default Header