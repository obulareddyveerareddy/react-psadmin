"use strict";
var React       = require('react');
var PropTypes   = require('prop-types');
var _           = require('lodash');
var Link        = require('react-router-dom').Link;
var toastr      = require('toastr');

class CoursesList extends React.Component{

    constructor(props){
        super(props);
        console.log('~~~~~~~~~~~~~~~~~~~ >> CoursesList << ~~~~~~~~~~~~~~~~~~~');
        console.log(this.props.courses);
        this.props = props;
    }

    render(){
        
        var createCourseRow = function(course){
            return(
                <tr key={course.id}>
                    <td><a href="#">Watch</a></td>
                    <td><a href="#">Delete</a></td>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.author}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
            )
        }

        return(
            <div>
                <div className="input-group pull-right">
                    <input type="text" className="form-control" placeholder="Search..." aria-describedby="basic-addon2"/>
                    <span className="input-group-addon"><i className="fa fa-search"></i></span>
                </div>
                <table className="table table-bordered table-striped">
                    <thead className="thead-inverse">
                        <tr>
                            <th colSpan="2"></th>
                            <th className="text-center text-primary">Id</th>
                            <th className="text-center text-primary">Title</th>
                            <th className="text-center text-primary">Author</th>
                            <th className="text-center text-primary">Category</th>
                            <th className="text-center text-primary">Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        )
    }

}

CoursesList.propTypes = {
    courses: React.PropTypes.array.isRequired,
};

module.exports = CoursesList;