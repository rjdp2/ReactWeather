var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        var {location, temp} = this.props;
        return (
            <h3>temperature in {location} is {temp} deg centigrade.</h3>
        );
    }
});

module.exports = WeatherMessage;
