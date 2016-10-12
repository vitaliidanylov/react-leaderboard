var React = require('react');

var Row = React.createClass({

	render: function() {
		return (
			<tr>
				<td>{this.props.count}</td>
				<td><img src={this.props.obj.img} alt="img" /></td>
				<td className='userlink'><a href={"https://www.freecodecamp.com/"+ this.props.obj.username} target='blank'>{this.props.obj.username}</a></td>
				<td>{this.props.obj.alltime}</td>
				<td>{this.props.obj.recent}</td>
			</tr>
		);
	}

});

module.exports = Row;