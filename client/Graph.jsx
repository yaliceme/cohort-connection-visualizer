Graph = React.createClass({
  componentDidMount: function () {
    var el = this.getDOMNode();
    var svg = d3.select(el)
              .append("svg")
              .attr("width", this.props.width)
              .attr("height", this.props.height)
              .style("background-color", "teal")
    this.updateGraph(this.props);
  },

  componentWillUpdate: function (nextProps) {
    this.updateChart(nextProps);
  },

  getDefaultProps: function () {
    return {
      width: 720,
      height: 540
    }
  },

  render: function () {
    return (
      <div className="graph">
      </div>
    );
  },

  updateGraph: function (props) {

  }
});