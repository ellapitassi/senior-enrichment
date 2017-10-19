import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';

const SideBar = (props) => {
    return(
        <sidebar>
            <section>
                <h4>
                    <Link className="btn btn-primary btn-block" to="/new-student">
                        <span className="glyphicon glyphicon-plus"></span> STUDENT
                    </Link>
                </h4>
            </section>
            <hr />
        </sidebar>
    )
}

export default SideBar;
    
