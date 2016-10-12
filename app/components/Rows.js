var React = require('react');
var Row = require('./Row');

var Rows = React.createClass({

	render: function() {
		var count = 0;
		var data = this.props.data.map(function(obj,index) {				
			count++;
			return <Row key={index} obj={obj} count={count}/>;
		});
		return (
			<tbody>
				{data}
			</tbody>
		);
	}

});

module.exports = Rows;