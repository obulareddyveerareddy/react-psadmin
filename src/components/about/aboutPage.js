"use strict";

var React = require('react');

class About extends React.Component{
    static willTransitionTo(transition,params,query,callback) {
        console.log('::::::::::::---> This is static willTransitionTo <---::::::::::::');
        if(!confirm('Are you sure you read a page that`s this boring?')){
            transition.about();
        }else{
            callback();
        }
    }

    render(){
        return(
            <div>
                <h1>About</h1>
                <p>This application uses the fallowing technologies</p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Glup</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }

    routerWillLeave(nextLocation) {
        console.log('::::::::::::---> This is routerWillLeave <---::::::::::::');
    }
        
}
module.exports = About;