MeSelector = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

  },
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">What is your name?</h3>
        </div>
        <div className="panel-body">
          <select>
            <option>Alice</option>
            <option>Taylor</option>
            <option>Diamond</option>
          </select>
        </div>
      </div>
    );
  }
});