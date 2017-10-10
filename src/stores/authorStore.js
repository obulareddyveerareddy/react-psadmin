"use strict";
var Dispatcher      = require('../dispatcher/appDispatcher');
var ActionTypes     = require('../constants/actionTypes');
var EventEmitter    = require('events').EventEmitter;
var assign          = require('object-assign');
var CHANGE_EVENT    = 'change';
var _               = require('lodash');

var _authors    = [];

var AuthorStore = assign({}, EventEmitter.prototype, {

    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
        this.removeChangeListener(CHANGE_EVENT, callback);
    },

    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors:function(){
        return _authors;
    },

    getAuthorById:function(id){
        return _.find(_authors, {id: _.toNumber(id)})
    }

});

Dispatcher.register(function(action){
    switch(action.actionType){
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
        break;
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
        break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthorIndex = _.indexOf(_authors, _.find(_authors, {id:action.author.id}));
            _authors[existingAuthorIndex] = action.author;
        break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(_authors, function(author){
                return _.toNumber(action.id) === author.id
            });
        break;
        default:
            // no op
    }
    AuthorStore.emitChange();
});

module.exports = AuthorStore;