//This will be the home page display of campuses

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import Navbar from './Navbar';


const RANDOM_CAMPUS = '/api/campus/1'

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
        console.log("this.state: ", this.state)
        const campuses = this.state.campuses;
        console.log("campuses: ",campuses);
        return (
             //<h1>HI</h1>
            <div id="main" className="container-fluid">
            <Navbar />
            <h3>CAMPUSES</h3>
            <div className="row">
                {
                    campuses.map(campus => {
                        //return (
                            <div>
                            <li key={campus.id} className="col-xs-4">
                            <a className="thumbnail" href="#">
                            </a>
                            </li>
                            </div>
                       // )
                    })
                }
            </div>
            </div>
    )
    }
}