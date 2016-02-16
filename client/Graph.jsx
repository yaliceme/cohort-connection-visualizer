Graph = React.createClass({
  componentDidMount: function () {
    var el = this.getDOMNode();
    var svg = d3.select(el)
              .append("svg")
              .attr("width", this.props.width)
              .attr("height", this.props.height)
              .style("background-color", "teal")
    // console.log("this.props:", this.props);
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
      <div className="graph"></div>
    );
  },

  updateGraph: function (props) {
    var color = d3.scale.category20();
    var force = d3.layout.force()
                .charge(-120)
                .linkDistance(30)
                .size([props.width, props.height]);

  }
});