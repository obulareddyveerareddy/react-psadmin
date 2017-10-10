"use strict";
var React           = require('react');
var ReactDOM        = require('react-dom');
var BrowserRouter   = require('react-router-dom').BrowserRouter;
var App             = require('./components/app')
var Home            = require('./components/homePage');
var InitializeActions = require('./actions/initializeActions');
var CourseActions     = require('./actions/courseActions');
InitializeActions.initApp();
CourseActions.fetchCourses();

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'));