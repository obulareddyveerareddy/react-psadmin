"use strict";
var Dispatcher      = require('../dispatcher/appDispatcher');
var ActionTypes     = require('../constants/actionTypes');
var EventEmitter    = require('events').EventEmitter;
var assign          = require('object-assign');
var CHANGE_EVENT    = 'change';
var _               = require('lodash');

var _courses    = [];

var CoursesStore = assign({}, EventEmitter.prototype, {

    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
        this.removeChangeListener(CHANGE_EVENT, callback);
    },

    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },

    getAllCourses:function(){
        return _courses;
    },

    getCourseById:function(id){
        return _.find(_courses, {id: _.toNumber(id)})
    }

});

Dispatcher.register(function(action){
    switch(action.actionType){
        case ActionTypes.INITIALIZE:
            _courses = action.initialData.courses;
        break;
        case ActionTypes.CREATE_COURSE:
            _courses.push(action.course);
        break;
        case ActionTypes.UPDATE_COURSE:
            var editEntryIndex = _.indexOf(_courses, _.find(_courses, {id:action.course.id}));
            _courses[editEntryIndex] = action.course;
        break;
        case ActionTypes.DELETE_COURSE:
            _.remove(_courses, function(course){
                return _.toNumber(action.id) === course.id
            });
        break;
        default:
            // no op
    }
    CoursesStore.emitChange();
});

module.exports = CoursesStore;