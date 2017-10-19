import React from 'react';
import { NavLink } from 'react-router-dom';
//looked at sidebar from juke 2


const Navbar = (props) => {

  //const deselectCampus = props.deselectCampus;

  return (
    <navbar>
          <section>
              <h4 className="menu-item">
                  <NavLink to="/campuses">CAMPUSES</NavLink>
              </h4>
          </section>
          <section>
              <h4 className="menu-item">
                  <NavLink to="/students">STUDENTS</NavLink>
              </h4>
          </section>
    </navbar>
  );
}

export default Navbar;