/* eslint-disable strict */
var React       = require('react');
var Header      = require('./common/header');
$ = jquery      = require('jquery');
var Route       = require('react-router-dom').Route;
var Switch      = require('react-router-dom').Switch;
var Redirect    = require('react-router-dom').Redirect;
var Home        = require('./homePage');
var Authors     = require('./authors/authorPage');
var About       = require('./about/aboutPage');
var ManageAuthorPage    = require('./authors/manageAuthorPage');

var CoursesPage         = require('./courses/coursesPage');
var ManageCoursesPage   = require('./courses/manageCoursesPage');

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid">
                    <Switch>
                    <Route name="app" exact path='/'   component={Home}/>
                    
                    <Route name="authors" path='/authors'  component={Authors}/>
                    <Route name="addAuthor" path='/addAuthor'  component={ManageAuthorPage}/>
                    <Route name="manageAuthor" path='/manageAuthor/:id'  component={ManageAuthorPage}/>

                    <Route name="courses" path='/courses'  component={CoursesPage}/>
                    <Route name="addCourses" path='/addCourses'  component={ManageCoursesPage}/>

                    <Route name="about"   path='/about'    component={About}/>
                    <Route exact path="/login" render={() => (<Redirect to="/" />)} />
                    </Switch>
                </div>
            </div>
        )
    }
};

module.exports = App;