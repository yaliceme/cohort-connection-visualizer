ClearAll = React.createClass({
  render: function () {
    if (this.props.data.currentUser) {
      return (
        <button onClick={this.props.clearAll}>Clear all</button>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
});