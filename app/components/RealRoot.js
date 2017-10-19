import React, { Component } from 'react';
//import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import SingleCampus from './SingleCampus';
import store, {fetchCampuses, fetchStudents, fetchSingleCampus} from '../store';
import Navbar from './Navbar';
import SideBar from './SideBar';
import axios from 'axios'

export default class RealRoot extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //   campuses: [],
    //   selectedCampus: {}
    // }
  //  this.selectedCampus = this.selectedCampus.bind(this);
  }
componentDidMount() {
    const thunk = fetchCampuses();
    store.dispatch(thunk);

    const thunk2 = fetchStudents();
    store.dispatch(thunk2);

  }

//   selectedCampus(campusId) {
//       axios.get(`/api/campuses/${campusId}`)
//       .then(res => res.data)
//       .then(campus => this.setState({
//           selectedCampus: campus
//       }))
 // }

//   deselectedCampus() {
//       this.setState({ selectedCampus: {}})
//   }



   render () {
    // return (
    //   <div>
    //     <app>
    //       <Switch>
    //         <Route path="/campuses/:campusId" component={CampusList} />
    //         <Redirect to="/campuses" />
    //       </Switch>
    //     </app>
    //   </div>
    // );
    return (
        // <Router>
            <div id="main" className="main-container">
                <div className="col-xs-2">
                <h5>Welcome to The School of Animals</h5>
                    <Navbar />
                </div>
                <div className="col-xs-10">
                    <Switch>
                        <Route exact path="/campuses/:campusId" component={SingleCampus} />
                        <Route path="/campuses" component={CampusList} />
                        <Route path="/students" component={StudentList} />
                    </Switch>
                </div>
            </div>
        // </Router>
    )
  }
}