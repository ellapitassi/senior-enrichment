//look at juke 2
import React, { Component } from 'react';
//import students
import { NavLink } from 'react-router-dom';
import store from '../store';
import Navbar from './Navbar';
import StudentList from './StudentList';
import {fetchSingleCampus} from '../store'

export default class SingleCampus extends Component {
  constructor(props) {
    //console.log("HI")

        super(props);
        this.state = store.getState();
    }

    componentDidMount() {
        const campusId = Number(this.props.match.params.campusId);
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
        const thunk3 = fetchSingleCampus(Number(campusId));
        store.dispatch(thunk3)
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
  render () {
    console.log("This.state: ",this.state)
    const campus = this.state.selectedCampus;
            //   <h3>{ campus.name }</h3>
    const students = this.state.students;
    const filteredStudents = students.filter(function(student){
      return student.campusId === campus.id
    })
    return (
      <div className="campus">
        <h3>{ campus.name }</h3>
        <div className="row">
        {
          filteredStudents.map(student => (
            <div className="col-xs-4" key={ student.id }>
                <div className="caption">
                  <h5>{ student.name } {student.email}</h5>
                </div>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}