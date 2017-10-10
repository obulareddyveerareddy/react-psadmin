"use strict";

var Dispatcher  = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var CoursesApi  = require('../api/coursesApi');

var CourseActions = {
    fetchCourses:function(author){
        Dispatcher.dispatch({
            actionType:ActionTypes.INITIALIZE,
            initialData:{
                courses:CoursesApi.getAllCourses()
            }
        });
    }
}

module.exports = CourseActions;