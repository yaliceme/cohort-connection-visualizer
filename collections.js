Nodes = new Mongo.Collection("Nodes");

Meteor.methods({
  "addNode": function (name, partnerNames) {
    return Nodes.insert({name: name, partnerNames: partnerNames});
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