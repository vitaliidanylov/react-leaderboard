var React = require('react');
var ReactDOM = require('react-dom');
var Headings = require('./components/Headings');
var Rows = require('./components/Rows');
var css = require('./components/style.sass');
var Heading = require('./components/Heading');

var App = React.createClass({
	getInitialState: function() {
		return {
			data: [],
			orderRecent: false,
			orderAll: false
		};
	},
	componentDidMount: function() {
		var request = new XMLHttpRequest();
		var url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
		request.open("GET", url, true);
		var data = request.responseText;
		request.onload = function(){
    		var response = request.responseText;
    		var data = JSON.parse(response);
    		console.log(data);
			this.setState({
				data: data
			})
		}.bind(this);
		request.send(null);
	},
	sortRecentTableAscBy: function() {
		var order = this.state.orderRecent;
		var data = this.state.data.sort(function(a,b) {
			return a.recent - b.recent;
		})
		this.setState({
			data: data,
			orderRecent: !order
		});
		console.log('sortRecentTableAscBy!');
	},
	sortRecentTableDescBy: function() {
		var order = this.state.orderRecent;
		var data = this.state.data.sort(function(a,b) {
			return b.recent - a.recent;
		})
		this.setState({
			data: data,
			orderRecent: !order
		});
		console.log('sortRecentTableAscBy!');
	},
	handleSort: function() {
		if (this.state.orderRecent) {
			this.sortRecentTableAscBy();
		} else {
			this.sortRecentTableDescBy();
		}
		console.log(this.state.data);
	},

	sortAllTimeTableAscBy: function() {
		var order = this.state.orderAll;
		var data = this.state.data.sort(function(a,b) {
			return a.alltime - b.alltime;
		})
		this.setState({
			data: data,
			orderAll: !order
		});
	},
	sortAllTimeTableDescBy: function() {
		var order = this.state.orderAll;
		var data = this.state.data.sort(function(a,b) {
			return b.alltime - a.alltime;
		})
		this.setState({
			data: data,
			orderAll: !order
		});
	},
	handleSortAll: function() {
		if (this.state.orderAll) {
			this.sortAllTimeTableAscBy();
		} else {
			this.sortAllTimeTableDescBy();
		}
	},

	render: function() {
		return (
			<div className='content'>
				<table className='table'>
					<Headings>
						<Heading heading={'#'} />
						<Heading heading={'Photo'} />
						<Heading heading={'Nickname'} />
						<Heading heading={'Total'} sort={this.handleSortAll} />
						<Heading heading={'Last 30 days'} sort={this.handleSort} />
					</Headings>
					<Rows data={this.state.data} />
				</table>
			</div>
		);
	}

});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('app'));