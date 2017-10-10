"use strict";

var React = require('react');
var _ = require('lodash');
//var AuthorApi = require('../../api/authorApi');
var AuthorActions   = require('../../actions/authorActions');
var AuthorStore     = require('../../stores/authorStore');
var AuthorList      = require('./authorList') 
var Link            = require('react-router-dom').Link;

class Authors extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            authors:[]
        };

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount(){
        var apiResponse = AuthorStore.getAllAuthors();
        this.setState({authors: apiResponse});
        this.setState({clonedAuthors: _.clone(apiResponse)});
    };

    filterHandler(filterStr, self){
        console.log('~~~~~~~~~~~~~~~~~~~ >> filterHandler << ~~~~~~~~~~~~~~~~~~~');
        self.setFilter(filterStr);
    }

    componentWillMount(){
        AuthorStore.addChangeListener(this._onChange);
    }

    _onChange(){
        this.setState({authors: AuthorStore.getAllAuthors()});
    }

    setFilter(filterStr){
        console.log('~~~~~~~~~~~~~~~~~~~ >> setFilter << ~~~~~~~~~~~~~~~~~~~');
        let filteredAuthors = [];
        if(filterStr.trim().length > 0){
            _.forEach(this.state.clonedAuthors, function(author){
                _.forEach(author, function(value, key) {
                    if(!_.isNumber(value)){
                        if(value.indexOf(filterStr) > -1){
                            filteredAuthors.push(author);
                        }
                    }
                });
            });
        }else{
            filteredAuthors =  this.state.clonedAuthors;
        }
        this.setState({authors: _.clone(filteredAuthors)});
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Authors</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="pull-right">
                            <Link to="addAuthor" className="btn btn-primary">Add Author</Link>
                        </div>
                        <AuthorList authors={this.state.authors} filter={this.filterHandler} self={this}></AuthorList>   
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = Authors;