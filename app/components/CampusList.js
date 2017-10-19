//This will be the display of campuses

import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import store from '../store';
import Navbar from './Navbar';
import {selectedCampus} from './RealRoot'

export default class CampusList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        ///console.log("this.state: ", this.state)
        const campuses = this.state.campuses;
       // console.log("campuses: ",campuses);
        const selectedCampus = this.state.selectedCampus;
       // console.log("selected campus: ", selectedCampus)

    return (
      <div>
        <h3>Campuses</h3>
        <div className="row">
        {
          campuses.map(campus => (
            <div className="col-xs-4" key={ campus.id }>
                <div className="caption">
                  <Link to={`/campuses/${campus.id}`}>
                  <h5>{ campus.name }</h5>
                  </Link>
                </div>
            </div>
          ))
        }
        </div>
      </div>
    );
    }
}