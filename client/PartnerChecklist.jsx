PartnerChecklist = React.createClass({
  handleChange: function (event) {
    Meteor.call("addNode", event.target.value);
    Meteor.call("addLink", this.props.me, event.target.value);
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

//TODO: make it so that unchecking a box removes that connection. Right now a change event fires regardless of whether it was checking or unchecking, can't distinguish which one it was.
//TODO: make it so that connection adding is mutual
