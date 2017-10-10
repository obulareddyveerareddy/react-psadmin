"use strict";

var courses = require('./coursesData').courses;
var _ = require('lodash');

var _clone = function(item){
    return JSON.parse(JSON.stringify(item));
}

var CoursesApi = {
    getAllCourses: function(){
        return _clone(courses);
    },

    getCoursesById:function(param){
        var course = _.find(courses, function(item) { 
            return item.id === _.toNumber(param); 
        });
        return _clone(course);
    },

    saveCourse: function(course){
        console.log('Pretend this just saved the author to the DB via AJAX call...');
        if(course.id){
            var existingAuthorIndex = _.indexOf(courses, _.find(courses, {id:course.id}));
            courses[existingAuthorIndex] = course;
        }else{
            course['id']     = Math.floor(Math.random()* 1000) + 1;
            courses.push(course);
        }
        return _clone(course);
    },

    deleteCourse:function(id){
        console.log('Pretend thie just deleted the author from the DB via AJAX call...');
        _.remove(courses, {'id': _.toNumber(id)});
    }
};

module.exports = CoursesApi;