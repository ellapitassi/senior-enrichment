import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CampusList from './Campuslist';
import store, {fetchCampuses} from '../store';

export default class RealRoot extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       campuses: [],
//       selectedCampus: {}
//     }
//     //bind
//   }

  componentDidMount() {
    const thunk = fetchCampuses();
    store.dispatch(thunk);
  }



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
        //<Router>
        <div>
        <CampusList/>
        <h1>HI from realrootfile</h1>
        </div>
       // </Router>

    )
  }
}