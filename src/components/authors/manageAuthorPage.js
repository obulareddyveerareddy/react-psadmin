"use strict";
var React       = require('react');
var Router      = require('react-router-dom').Router;
var AuthorForm  = require('./authorForm');
//var AuthorApi   = require('../../api/authorApi');
var AuthorActions   = require('../../actions/authorActions');
var AuthorStore     = require('../../stores/authorStore');

var toastr      = require('toastr');
var prompt      = require('react-router-dom').Prompt;

class ManageAuthorPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            author:{ userId:"", firstName:"", lastName:""},
            errors:{},
            dirty:false
        }
        this.setAuthorState = this.setAuthorState.bind(this);
        this.saveAuthor     = this.saveAuthor.bind(this);
        this.authorFormIsValid  = this.authorFormIsValid.bind(this);
        this.componentWillLeave = this.componentWillLeave.bind(this);
    }

    setAuthorState(event){
        console.log('-------------------->>> Set Author <<<--------------------');
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        this.setState({dirty: true});
        return this.setState({author: this.state.author});
    }

    componentWillMount() {
        console.log('~~~~~~~~~~~~~~~~>>> componentWillMount <<<~~~~~~~~~~~~~~~~');
        console.log(this.props.match.params.id);
        if(this.props.match.params.id){
            let editAuthor = AuthorStore.getAuthorById(this.props.match.params.id);
            console.log(editAuthor);
            this.setState({author: editAuthor});
        }
        
    }

    componentWillLeave(callback) {
        if(this.state.dirty && !confirm('Leave without saving?')){
            callback();
        }
    }

    authorFormIsValid(){
        var formIsValid = true;
        this.state.errors = {};
        if(this.state.author.firstName.length < 3){
            formIsValid = false;
            this.state.errors.firstName= 'First Name must be atleast 3 charecters';
        }

        if(this.state.author.lastName.length < 3){
            formIsValid = false;
            this.state.errors.lastName= 'Last Name must be atleast 3 charecters';
        }

        this.setState({errors:this.state.errors});
        return formIsValid;
    }

    saveAuthor(event){
        event.preventDefault();
        console.log('------------------------ >>> saveAuthor <<< ------------------------');
        console.log(this.state.author);
        if(!this.authorFormIsValid()){
            return;
        }
        //AuthorApi.saveAuthor(this.state.author);
        if(this.state.author.id){
            AuthorActions.updateAuthor(this.state.author);
        }else{
            AuthorActions.createAuthor(this.state.author);
        }
        
        this.setState({dirty: false});
        toastr.success('Author saved.');
        this.props.history.push('/authors');
    }

    render(){
        return(
            <AuthorForm 
            author={this.state.author} 
            onChange={this.setAuthorState}
            onSave={this.saveAuthor}
            errors={this.state.errors}></AuthorForm>
        );
    }
}

ManageAuthorPage.contextTypes = {
    router: React.PropTypes.object
}
module.exports = ManageAuthorPage;