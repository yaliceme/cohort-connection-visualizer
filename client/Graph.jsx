Graph = React.createClass({
  componentDidMount: function () {
    var el = this.getDOMNode();
    var svg = d3.select(el)
              .append("svg")
              .attr("width", this.props.width)
              .attr("height", this.props.height)
              .style("background-color", "teal")
    // for some reason, code only works when this console.log is in
    console.log("this.props:", this.props);
    this.updateGraph(this.props);
    console.log("this.props.data from componentDidMount:", this.props.data);
    this.getLinks(this.props.data, function (links) {
      console.log("links:", links);
    });
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

  buildMap: function (nodesArray, callback) {
    console.log("nodesArray inside buildMap:", nodesArray);
    var map = {};
    for (var i = 0; i < nodesArray.length; i++) {
      map[nodesArray[i].name] = i;
    }
    callback(map);
  },

  getLinks: function (nodesArray, callback) {
    console.log("nodesArray inside getLinks:", nodesArray);
    this.buildMap(nodesArray, function (map) {
      console.log("map passed to buildMap callback in getLinks:", map);

      var links = [];
      for (var i = 0; i < nodesArray.length; i++) {
        var currentNode = nodesArray[i]; // object {_id: "", name: "", partnerNames: ["", "", ...]}
        var currentPartners = currentNode.partnerNames; // array of name strings
        for (var j = 0; j < currentPartners.length; j++) {
          var thisPartner = currentPartners[j]; // string name
          if (map[thisPartner] > i) {
            var link = {source: i, target: map[thisPartner]};
            links.push(link);
          }
        }
      }
      callback(links);
    });
  },

  updateGraph: function (props) {
    var color = d3.scale.category20();
    var force = d3.layout.force()
                .charge(-120)
                .linkDistance(30)
                .size([props.width, props.height]);

  }
});