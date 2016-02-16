Counters = new Mongo.Collection("Counters");

// small bug: the Counters.insert runs every time the server starts
// but only the first one is incremented/used, so seems ok for now
if (Counters.findOne() === undefined) {
  Counters.insert({seq: 0});
}

Nodes = new Mongo.Collection("Nodes");
Links = new Mongo.Collection("Links");

Meteor.methods({
  "addNode": function (name) {
    if (Nodes.findOne({name: name}) === undefined) {
      var nodeIndex = Counters.findOne().seq;
      Nodes.insert({nodeIndex: nodeIndex, name: name});
      Counters.update({seq: nodeIndex}, {seq: nodeIndex + 1});
    }
  },
  "addLink": function (sourceName, targetName) {
    var sourceIndex = Nodes.findOne({name: sourceName}).nodeIndex;
    var targetIndex = Nodes.findOne({name: targetName}).nodeIndex;

    if (Links.findOne({$or: [
      {source: sourceIndex, target: targetIndex},
      {source: targetIndex, target:sourceIndex}]}) === undefined) {
      Links.insert({source: sourceIndex, target: targetIndex});
    }
  }

  // "removeNode": function (name) {
  //   Nodes.remove({name: name});
  // },

  // "addConnection": function (name, partnerName) {
  //   Nodes.update({name: name}, {$addToSet: {partnerNames: partnerName}});
  // }
  // ,
  // "removeConnection": function (name, partnerName) {
  //   Nodes.update({name: name}, {$pull: {partnerNames: partnerName}});
  // }
});

//NOTE: got rid of "removeNode" method for now. Cannot remove a node without breaking indexing for Links. Refactor later.
