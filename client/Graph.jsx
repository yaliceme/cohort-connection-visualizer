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
    // var map = this.buildMap(this.props.data);
    // setTimeout(function(){
    //   console.log("map:", map);
    // }, 500);
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

  buildMap: function (nodesArray) {
    var map = {};
    for (var i = 0; i < nodesArray.length; i++) {
      map[nodesArray[i].name] = i;
    }
    return map;
  },

  updateGraph: function (props) {
    var color = d3.scale.category20();
    var force = d3.layout.force()
                .charge(-120)
                .linkDistance(30)
                .size([props.width, props.height]);

  }
});