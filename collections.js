Nodes = new Mongo.Collection("Nodes");

// personId is a number
// partnerId is a number
// parternerIds is an array of numbers

Meteor.methods({
  "addNode": function (personId, partnerIds) {
    return Nodes.insert({id: personId, partnerIds: partnerIds});
  },
  "removeNode": function (personId) {
    Nodes.remove({id: personId});
  },
  "addConnection": function (personId, partnerId) {
    Nodes.update({id: personId}, {$addToSet: {partnerIds: partnerId}});
  },
  "removeConnection": function (personId, partnerId) {
    Nodes.update({id: personId}, {$pull: {partnerIds: partnerId}});
  }
});