//the display of the student list
//need to look at juke forms
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import Navbar from './Navbar';
import SideBar from './SideBar';

export default class StudentList extends Component {
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
        const students = this.state.students;
        console.log("students: ",students);
//make another column for buttons, in those buttons have onClick== a handler I will write

        return (
            <div>
                <h3>Students</h3>
                <SideBar />
                <div className="column">
                    <table className="table">
                        <thead>
                            <tr>
                                <th><abbr title="#">#</abbr></th>
                                <th><abbr title="Name">Name</abbr></th>
                                <th><abbr title="Campus">Campus</abbr></th>
                            </tr>
                        </thead>

                        <tbody>
                                {
                                    students.map(student => (
                                        <tr className="col-xs-4" key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.campusId}</td>
                                        </tr>
                                    ))
                                }
                        </tbody>

                    </table>
                </div>
            </div>
    );
    }
}