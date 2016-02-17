PartnerChecklist = React.createClass({
  handleChange: function (event) {
    // only perform an action if the change was going from unchecked to checked
    if (event.target.checked) {
      Meteor.call("addNode", event.target.value);
      Meteor.call("addLink", this.props.me, event.target.value);
    }
  },
  isInHR39: function (currentUser) {
    if (!currentUser) {
      return false;
    }
    var username = currentUser.services.github.username;
    var authorizedUsernames = [
      "abuddiga",
      "alberthuynh91",
      "asu91",
      "alexanthony813",
      "bignell",
      "chououtside",
      "yaliceme",
      "aarti156",
      "boyajay",
      "brianronaghan",
      "carlosyasu91",
      "christo4b",
      "denizmekik",
      "Rhombus33",
      "LeeGar",
      "hamzahc1",
      "hiteshlala",
      "jackie77",
      "jake-shasteen",
      "jblza",
      "joeycchin",
      "kathy-ems",
      "Aniroel",
      "leranf",
      "m6cheung",
      "oliverbhuang",
      "pavelmp",
      "peterlollo",
      "rsboggs",
      "RossAD",
      "sumosam",
      "SteffenBerlin",
      "tchamberlain",
      "tiffeli",
      "vincentvpham",
      "xuejinglu",
      "lindayezou"
    ];
    if (authorizedUsernames.indexOf(username) === -1) {
      return false;
    } else {
      return true;
    }

  },
  render: function () {
    var currentUser = this.props.data.currentUser;
    if (this.isInHR39(currentUser)) {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Who were your pairing partners?</h3>
          </div>
          <div className="panel-body">
            <form onChange={this.handleChange}>
              <input type="checkbox" value="Akshay Buddiga"/> Akshay Buddiga <br/>
              <input type="checkbox" value="Albert Huynh"/> Albert Huynh <br/>
              <input type="checkbox" value="Alex Anthony"/> Alex Anthony <br/>
              <input type="checkbox" value="Alex Bignell"/> Alex Bignell <br/>
              <input type="checkbox" value="Alex Chou"/> Alex Chou <br/>
              <input type="checkbox" value="Alex Su"/> Alex Su <br/>
              <input type="checkbox" value="Alice Yu"/> Alice Yu <br/>
              <input type="checkbox" value="Arthi Palaniappan"/> Arthi Palaniappan <br/>
              <input type="checkbox" value="Boya Jiang"/> Boya Jiang <br/>
              <input type="checkbox" value="Brian Ronaghan"/> Brian Ronaghan <br/>
              <input type="checkbox" value="Chris Bassano"/> Chris Bassano <br/>
              <input type="checkbox" value="Deniz Mekik"/> Deniz Mekik <br/>
              <input type="checkbox" value="Diamond Wheeler"/> Diamond Wheeler <br/>
              <input type="checkbox" value="Gar Lee"/> Gar Lee <br/>
              <input type="checkbox" value="Hamzah Chaudhary"/> Hamzah Chaudhary <br/>
              <input type="checkbox" value="Hitesh Lala"/> Hitesh Lala <br/>
              <input type="checkbox" value="Jackie Liu"/> Jackie Liu <br/>
              <input type="checkbox" value="Jake Shasteen"/> Jake Shasteen <br/>
              <input type="checkbox" value="Jing Lu"/> Jing Lu <br/>
              <input type="checkbox" value="Joey Chin"/> Joey Chin <br/>
              <input type="checkbox" value="Jonathan Blaising"/> Jonathan Blaising <br/>
              <input type="checkbox" value="Kathy Ems"/> Kathy Ems <br/>
              <input type="checkbox" value="Leo Baybay"/> Leo Baybay <br/>
              <input type="checkbox" value="Leran Firer"/> Leran Firer <br/>
              <input type="checkbox" value="Linda Zou"/> Linda Zou <br/>
              <input type="checkbox" value="Michael Cheung"/> Michael Cheung <br/>
              <input type="checkbox" value="Oliver Huang"/> Oliver Huang <br/>
              <input type="checkbox" value="Pavel Parshakov"/> Pavel Parshakov <br/>
              <input type="checkbox" value="Peter Lollo"/> Peter Lollo <br/>
              <input type="checkbox" value="Robert Boggs"/> Robert Boggs <br/>
              <input type="checkbox" value="Ross Davis"/> Ross Davis <br/>
              <input type="checkbox" value="Saumitra Saha"/> Saumitra Saha <br/>
              <input type="checkbox" value="Steffen Baumgarten"/> Steffen Baumgarten <br/>
              <input type="checkbox" value="Taylor Chamberlain"/> Taylor Chamberlain <br/>
              <input type="checkbox" value="Tiffany Thong"/> Tiffany Thong <br/>
              <input type="checkbox" value="Vincent Pham"/> Vincent Pham <br/>
              <input type="checkbox" value="Yasu Flores"/> Yasu Flores <br/>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Log in from an HR39 account to contribute.</h3>
          </div>
          <div className="panel-body">
          </div>
        </div>
      );


    }
  }
});

//TODO: make it so that unchecking a box removes that connection.
