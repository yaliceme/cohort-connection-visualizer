Graph = React.createClass({
  componentDidMount: function () {
    var el = this.getDOMNode();
    var svg = d3.select(el)
              .append("svg")
              .attr("width", this.props.width)
              .attr("height", this.props.height)
    this.updateGraph(this.props);
  },

  componentWillUpdate: function (nextProps) {
    this.updateGraph(nextProps);
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

  color: d3.scale.category20(),

  updateGraph: function (props) {
    var div = d3.select(this.getDOMNode())
              .append("div")
              .attr("class", "tooltip")
              .style("opacity", 0);

    var color = this.color;

    var force = d3.layout.force()
                .charge(-150)
                .linkDistance(120)
                .size([props.width, props.height])
                .nodes(props.data.nodes)
                .links(props.data.links);

    var svg = d3.select("svg");

    var links = svg.selectAll('.link').data(props.data.links);

    links.enter()
          .append('line')
          .attr('class', 'link')

    links.exit()
          .remove();

    var nodes = svg.selectAll('.node').data(props.data.nodes);

    nodes.enter()
          .append('circle')
          .attr('class', 'node')
          .attr('r', 7)
          .style('fill', function (d) {
            var colorNumber = (d.nodeIndex)%20;
            return color(colorNumber);
          })
          .on('mouseenter', function (d) {
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html(d.name)
                .style("left", (d3.mouse(this)[0] - 10) + "px")
                .style("top", (d3.mouse(this)[1] - 14) + "px")

          })
          .on('mouseleave', function (d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
          })
          .call(force.drag);

    nodes.exit()
          .remove();

    force.on("tick", function(){
      links.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      nodes.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    });

    force.start();
  }
});