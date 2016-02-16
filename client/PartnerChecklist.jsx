PartnerChecklist = React.createClass({
  handleChange: function (event) {
    Meteor.call("addConnection", this.props.me, event.target.value);
  },
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Who were your pairing partners?</h3>
        </div>
        <div className="panel-body">
          <form onChange={this.handleChange}>
            <input type="checkbox" value="Alice"/> Alice<br/>
            <input type="checkbox" value="Taylor"/> Taylor<br/>
            <input type="checkbox" value="Diamond"/> Diamond<br/>
            <input type="checkbox" value="Steffen"/> Steffen<br/>
            <input type="checkbox" value="Michael"/> Michael<br/>
          </form>
        </div>
      </div>
    );
  }
});