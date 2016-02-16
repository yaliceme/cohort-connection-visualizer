App = React.createClass({
  getInitialState () {
    return {
      self: null
    };
  },

  mixins: [ReactMeteorData],

  getMeteorData () {
    return {
      nodes: Nodes.find({}).fetch()
    }
  },

  render () {
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
          <div className="col-md-3">
            <MeSelector changeSelf={this.changeSelf}/>
            <PartnerChecklist me={this.state.self}/>
          </div>
          <div className="col-md-7">
            <Graph data={this.data.nodes} width="720" height="540"/>
          </div>
        </div>
      </div>
      </div>
    );
  },

  changeSelf (name) {
    this.setState({self: name});
  }
});