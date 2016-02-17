Counters = new Mongo.Collection("Counters");

if (Counters.findOne({}) === undefined) {
  Counters.insert({seq: 0});
}

HR39 = new Mongo.Collection("HR39");

HR39.insert([
  {username: "abuddiga"},
  {username: "alberthuynh91"},
  {username: "asu91"},
  {username: "alexanthony813"},
  {username: "bignell"},
  {username: "chououtside"},
  {username: "yaliceme"},
  {username: "aarti156"},
  {username: "boyajay"},
  {username: "brianronaghan"},
  {username: "carlosyasu91"},
  {username: "christo4b"},
  {username: "denizmekik"},
  {username: "Rhombus33"},
  {username: "LeeGar"},
  {username: "hamzahc1"},
  {username: "hiteshlala"},
  {username: "jackie77"},
  {username: "jake-shasteen"},
  {username: "jblza"},
  {username: "joeycchin"},
  {username: "kathy-ems"},
  {username: "Aniroel"},
  {username: "leranf"},
  {username: "m6cheung"},
  {username: "oliverbhuang"},
  {username: "pavelmp"},
  {username: "peterlollo"},
  {username: "rsboggs"},
  {username: "RossAD"},
  {username: "sumosam"},
  {username: "SteffenBerlin"},
  {username: "tchamberlain"},
  {username: "tiffeli"},
  {username: "vincentvpham"},
  {username: "xuejinglu"},
  {username: "lindayezou"}
]);

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
  },
  "clearAll": function () {
    Nodes.remove({});
    Links.remove({});
    Counters.remove({});
    Counters.insert({seq: 0});
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
