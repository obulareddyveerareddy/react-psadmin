"use strict";
var React = require('react');
var CoursesForm = require('./coursesForm');

class ManageCoursesPage extends React.Component{ 
    
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            course:{},
            errors:{}
        }
        this.setCourseState = this.setCourseState.bind(this);
        this.saveCourse     = this.saveCourse.bind(this);
    }

    setCourseState(event){
        event.preventDefault();
        this.state.course[event.target.field] = event.target.value;
        this.setState({course: this.state.course});
    }

    saveCourse(event){
        event.preventDefault();
    }
    
    render(){
        return(
            <div>
                <CoursesForm 
                    course={this.state.course} 
                    onChange={this.setCourseState}
                    onSave={this.saveCourse}
                    errors={this.state.errors}></CoursesForm>
            </div>
        )
    }
}
module.exports = ManageCoursesPage;