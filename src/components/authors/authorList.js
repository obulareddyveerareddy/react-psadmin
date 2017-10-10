"use strict";

var React = require('react');
var PropTypes = require('prop-types');
var _ = require('lodash');
var AuthorApi = require('../../api/authorApi');
var AuthorActions   = require('../../actions/authorActions');
var AuthorStore     = require('../../stores/authorStore');
var Link  = require('react-router-dom').Link;
var toastr      = require('toastr');

class AuthorList extends React.Component{
    
    constructor(props) {
        super(props);
        console.log('~~~~~~~~~~~~~~~~~~~ >> AuthorList << ~~~~~~~~~~~~~~~~~~~');
        console.log(this.props.authors);
        this.props = props;
    }

    filterHandler(event){
        console.log('~~~~~~~~~~~~~~~~~~~ >> filterHandler << ~~~~~~~~~~~~~~~~~~~');
        event.preventDefault();
        this.props.filter(event.target.value, this.props.self);
    }

    deleteAuthor(id, event){
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');
    }

    render(){
        var createAuthorRow = function(author, index){
            return(
                <tr key={author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                    <td>{author.id}</td>
                    <td><Link to={{ pathname:'/manageAuthor/'+author.id}}>{author.userId}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            )
        }
        return(
            <div>
                <div className="input-group pull-right">
                    <input type="text" className="form-control" placeholder="Search..." aria-describedby="basic-addon2" onChange={event => this.filterHandler(event)}/>
                    <span className="input-group-addon"><i className="fa fa-search"></i></span>
                </div>
                <table className="table table-bordered table-striped">
                    <thead className="thead-inverse">
                        <tr>
                            <th></th>
                            <th className="text-center text-primary">#</th>
                            <th className="text-center text-primary">ID</th>
                            <th className="text-center text-primary">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        )
    }
}

AuthorList.propTypes = {
    authors: React.PropTypes.array.isRequired,
    filter:React.PropTypes.func.isRequired
};

module.exports = AuthorList;