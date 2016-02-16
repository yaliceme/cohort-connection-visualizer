App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      nodes: Nodes.find({}).fetch()
    }
  },

  render: function () {
    return (
      <div>
        <div className="page-header">
          <center>
            <h1>
            <i className="fa fa-beer"></i> Connection <small> Visualizer</small>
            </h1>
          </center>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <MeSelector />
          </div>
          <div className="col-md-offset-2 col-md-6">
          </div>
        </div>
      </div>
      </div>
    );
  }
});