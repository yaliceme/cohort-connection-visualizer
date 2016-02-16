Graph = React.createClass({
  componentDidMount: function () {
    var el = this.getDOMNode();
    var svg = d3.select(el)
              .append("svg")
              .attr("width", this.props.width)
              .attr("height", this.props.height)
    // console.log("this.props", this.props);
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

  updateGraph: function (props) {
    var color = d3.scale.category20();
    var force = d3.layout.force()
                .charge(-120)
                .linkDistance(80)
                .size([props.width, props.height])
                .nodes(props.data.nodes)
                .links(props.data.links);

    var svg = d3.select("svg");

    var link = svg.selectAll('.link')
                .data(props.data.links)
                .enter().append('line')
                .attr('class', 'link');

    var node = svg.selectAll('.node')
                .data(props.data.nodes)
                .enter().append('circle')
                .attr('class', 'node')
                .attr('r', 7)
                .style('fill', function (d) {
                  var colorNumber = d.nodeIndex%20;
                  return color(colorNumber);
                })
                .call(force.drag);

    force.on("tick", function(){
      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    });

    force.start();

  }
});