var React = require('react');

var Heading = React.createClass({

	render: function() {
		return (
			<th>
				<a onClick={this.props.sort} href="#">{this.props.heading}</a>
			</th>
		);
	}

});

module.exports = Heading;