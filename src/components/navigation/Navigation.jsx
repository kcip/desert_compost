import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';
import './navigation.scss';




const Navigation = () => {
  const [isVisible, toggleisVisible] = useToggle(false);
  const [open, setOpen] = useToggle(false);
  const [show, setShow] = useToggle(false);

  const hamburger = ()=> {
    setOpen();
    toggleisVisible();
    setShow();
  }

  const removeModal = () => {
    toggleisVisible({
      isVisible: false
    });

    setOpen({
      open: false
    });

    setShow({
      show: false
    })
  }

  return (
    <Fragment>
      <div className="mobile--nav" onClick={() => hamburger()} >
        <span className={open ? "mobile--nav-span menu-is-open" : "mobile--nav-span"}></span>
      </div>
      <nav className={isVisible ? "nav show" : "nav"}>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeClassName="active" to="/home" exact>home</NavLink>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeClassName="active" to="/about-us" exact>about us</NavLink>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeClassName="active" to="/services" exact>services</NavLink>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeClassName="active" to="/projects" exact>projects</NavLink>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeClassName="active" to="/who-we-are" exact>who we are</NavLink>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeClassName="active" to="/purpose" exact>purpose</NavLink>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeClassName="active" to="/why-compost" exact>why compost</NavLink>
        <NavLink id="donate" onClick={removeModal} className={show ? 'is-shown' : ''} activeClassName="active" to="/donate" exact>donate</NavLink>
      </nav>
    </Fragment>
     
  )
}

export default Navigation

//  <NavLink id="donate" onClick={removeModal} className={show ? 'is-shown' : ''} activeClassName="active" to="/donate" exact>donate</NavLink>