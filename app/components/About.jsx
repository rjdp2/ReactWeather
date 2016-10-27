var React = require('react');
var {Link} = require('react-router');

var About = React.createClass({
    render: function () {
        return (
            <div>
            <h1 classname="text-center">About</h1>
            <p>Welcome to the abouts page</p>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    <p>Tools used</p>
                </div>
            </div>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    <ol>
                        <li><a href='https://facebook.github.io/react/docs/hello-world.html'>Reactjs</a></li>
                        <li><a href='http://openweathermap.org/'>OpenWeatherMap</a></li>
                    </ol>
                </div>
            </div>

            </div>
        );
    }
});

module.exports = About;
