Nodes = new Mongo.Collection("Nodes");

Meteor.methods({
  "addNode": function (name, partnerNames) {
    if (Nodes.findOne({name: name}) === undefined) {
      return Nodes.insert({name: name, partnerNames: partnerNames});
    }
  },
  "removeNode": function (name) {
    Nodes.remove({name: name});
  },
  "addConnection": function (name, partnerName) {
    Nodes.update({name: name}, {$addToSet: {partnerNames: partnerName}});
  },
  "removeConnection": function (name, partnerName) {
    Nodes.update({name: name}, {$pull: {partnerNames: partnerName}});
  }
});

//TODO: make it so that addConnection only adds if connection didn't previously exist. Alternatively, replace addConnection and removeConnection with toggleConnection
