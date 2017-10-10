"use strict";

var React   = require('react');
var _       = require('lodash');
var CourseActions   = require('../../actions/courseActions');
var CourseStore     = require('../../stores/courseStore');
var CoursesList     = require('./coursesList');
var Link            = require('react-router-dom').Link;

class CoursesPage extends React.Component{

    constructor(props){
        super(props);
        console.log('~~~~~~~~~~~~~~~>>> CoursesPage <<<~~~~~~~~~~~~~~~');
        this.state={
            courses:[]
        }
    }
    
    componentDidMount(){
        var apiResponse = CourseStore.getAllCourses();
        this.setState({courses: apiResponse});
        this.setState({clonedCourses: _.clone(apiResponse)});
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Courses</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="pull-right">
                            <Link to="addCourses" className="btn btn-primary"><i className="fa fa-plus"></i> Add Course</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <CoursesList courses={this.state.courses}></CoursesList>
                    </div>
                </div>
            </div>
        )
    }

}
module.exports = CoursesPage;