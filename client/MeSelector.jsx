MeSelector = React.createClass({
  handleChange: function (event) {
    event.preventDefault();
    var name = event.target.value;
    this.props.changeSelf(name);
    Meteor.call("addNode", name);
  },
  render: function () {
    if (this.props.data.currentUser) {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">What is your name?</h3>
          </div>
          <div className="panel-body">
            <select className="select" onChange={this.handleChange}>
              <option disabled selected>Please select your name...</option>
              <option>Akshay Buddiga</option>
              <option>Albert Huynh</option>
              <option>Alex Anthony</option>
              <option>Alex Bignell</option>
              <option>Alex Chou</option>
              <option>Alex Su</option>
              <option>Alice Yu</option>
              <option>Arthi Palaniappan</option>
              <option>Boya Jiang</option>
              <option>Brian Ronaghan</option>
              <option>Chris Bassano</option>
              <option>Deniz Mekik</option>
              <option>Diamond Wheeler</option>
              <option>Gar Lee</option>
              <option>Hamzah Chaudhary</option>
              <option>Hitesh Lala</option>
              <option>Jackie Liu</option>
              <option>Jake Shasteen</option>
              <option>Jing Lu</option>
              <option>Joey Chin</option>
              <option>Jonathan Blaising</option>
              <option>Kathy Ems</option>
              <option>Leo Baybay</option>
              <option>Leran Firer</option>
              <option>Linda Zou</option>
              <option>Michael Cheung</option>
              <option>Oliver Huang</option>
              <option>Pavel Parshakov</option>
              <option>Peter Lollo</option>
              <option>Robert Boggs</option>
              <option>Ross Davis</option>
              <option>Saumitra Saha</option>
              <option>Steffen Baumgarten</option>
              <option>Taylor Chamberlain</option>
              <option>Tiffany Thong</option>
              <option>Vincent Pham</option>
              <option>Yasu Flores</option>
            </select>
          </div>
        </div>
      );
    } else {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">What is your name?</h3>
          </div>
          <div className="panel-body">
          </div>
        </div>
      );
    }
  }
});