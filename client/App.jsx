App = React.createClass({

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
          </center>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <PartnerChecklist data={this.data}/>
            </div>
            <div className="col-md-7">
              <Graph data={this.data} width={720} height={825}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});