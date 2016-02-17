App = React.createClass({
  getInitialState () {
    return {
      self: null
    };
  },

  mixins: [ReactMeteorData],

  getMeteorData () {
    return {
      nodes: Nodes.find({}).fetch(),
      links: Links.find({}).fetch(),
      currentUser: Meteor.user()
    }
  },

  render () {
    return (
      <div>
        <div className="navbar">
          <AccountsUIWrapper />
        </div>
        <div className="page-header">
          <center>
            <h1>
              <i className="fa fa-beer"></i> Connection <small> Visualizer</small>
            </h1>
            <ClearAll clearAll={this.clearAll} data={this.data}/>
          </center>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <MeSelector changeSelf={this.changeSelf} data={this.data}/>
              <PartnerChecklist data={this.data} me={this.state.self}/>
            </div>
            <div className="col-md-7">
              <Graph data={this.data} width={720} height={540} changeHighlighted={this.changeHighlighted}/>
            </div>
          </div>
        </div>
      </div>
    );
  },

  changeSelf (name) {
    this.setState({self: name});
    $('input:checkbox').removeAttr('checked');
  },

  clearAll () {
    Meteor.call('clearAll');
  }
});