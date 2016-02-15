MeSelector = React.createClass({
  handleChange: function (event) {
    event.preventDefault();
    var name = event.target.value;
    Meteor.call("addNode", name, []);
  },
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">What is your name?</h3>
        </div>
        <div className="panel-body">
          <select className="select" onChange={this.handleChange}>
            <option disabled selected>Please select your name...</option>
            <option ref="name">Alice</option>
            <option ref="name">Taylor</option>
            <option ref="name">Diamond</option>
            <option ref="name">Steffen</option>
            <option ref="name">Hamzah</option>
          </select>
        </div>
      </div>
    );
  }
});