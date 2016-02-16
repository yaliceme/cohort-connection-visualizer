Graph = React.createClass({
  componentDidMount: function () {
    var el = this.getDOMNode();
    var svg = d3.select(el)
              .append("svg")
              .attr("width", this.props.width)
              .attr("height", this.props.height)
              .style("background-color", "teal")
  },

  render: function () {
    return (
      <div className="graph">
      </div>
    );
  }
});