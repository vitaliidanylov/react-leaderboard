var React = require('react');
var Heading = require('./Heading');

var Headings = React.createClass({

	render: function() {
		return (
			<thead>
				<tr>
					{this.props.children}
				</tr>
			</thead>
		);
	}

});

module.exports = Headings;