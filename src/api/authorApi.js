"use strict";

var authors = require('./authorData').authors;
var _ = require('lodash');

var _generateId = function(author){
    return author.firstName.toLowerCase()+'-'+author.lastName.toLowerCase();
}

var _clone = function(item){
    return JSON.parse(JSON.stringify(item));
}

var AuthorApi = {
    getAllAuthors: function(){
        return _clone(authors);
    },

    getAuthorById:function(param){
        console.log(authors);
        console.log(param);
        var author = _.find(authors, function(item) { 
            return item.id === _.toNumber(param); 
        });
        return _clone(author);
    },

    saveAuthor: function(author){
        console.log('Pretend this just saved the author to the DB via AJAX call...');
        author['userId'] = _generateId(author);
        if(author.id){
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id:author.id}));
            console.log('~~~~~~~~~~~~~~~~~~~>>> existingAuthorIndex <<<~~~~~~~~~~~~~~~~~~~');
            console.log(existingAuthorIndex);

            authors[existingAuthorIndex] = author;
        }else{
            console.log(':::::::::> Push New Author <:::::::::');
            author['id']     = Math.floor(Math.random()* 1000) + 1;
            authors.push(author);
        }
        return _clone(author);
    },

    deleteAuthor:function(id){
        console.log('Pretend thie just deleted the author from the DB via AJAX call...');
        _.remove(authors, {'id': _.toNumber(id)});
    }
};

module.exports = AuthorApi;