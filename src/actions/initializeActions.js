"use strict";

var Dispatcher  = require('../dispatcher/appDispatcher');
var AuthorApi   = require('../api/authorApi');
var ActionTypes   = require('../constants/actionTypes');

var initializeActions = {
    initApp:function(author){
        // Hay dispatcher, go tell all the stores that an author was created.
        Dispatcher.dispatch({
            actionType:ActionTypes.INITIALIZE,
            initialData:{
                authors:AuthorApi.getAllAuthors()
            }
        });
    }
}

module.exports = initializeActions;