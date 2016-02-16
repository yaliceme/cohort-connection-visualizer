HoverLabel = React.createClass({
  render: function () {
    return (
      <div className="col-md-offset-1">
        <h3>
          Hovering over: {this.props.highlighted}
        </h3>
      </div>
    );
  }
});