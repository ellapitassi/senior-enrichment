'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import store from './store'
import RealRoot from './components/RealRoot'

ReactDOM.render (
  <Router>
    <RealRoot/>
  </Router>,
  document.getElementById('main')
)