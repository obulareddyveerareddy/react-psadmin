"use strict";
var React = require('react');
var Input = require('../common/textInput');

class CoursesForm extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <div>
                <form className="col-sm-offset-4 col-sm-4">
                <h3>Add/Edit Course Details</h3>
                <Input 
                    name="title"
                    label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange} 
                    error={this.props.errors.title}/>
                <Input 
                    name="author"
                    label="Author"
                    value={this.props.course.author}
                    onChange={this.props.onChange}
                    error={this.props.errors.author} />
                <Input 
                    name="category"
                    label="Category"
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                    error={this.props.errors.category} />
                <Input 
                    name="length"
                    label="Length"
                    value={this.props.course.length}
                    onChange={this.props.onChange}
                    error={this.props.errors.length} />
                <input type="submit" value="Save" className="btn btn-success" onClick={this.props.onSave} />
                </form>
            </div>
        )
    }

}

module.exports = CoursesForm;