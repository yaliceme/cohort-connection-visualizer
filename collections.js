Nodes = new Mongo.Collection("Nodes");
Links = new Mongo.Collection("Links");

var nodesToInsert = [
  {nodeIndex: 0, username: "abuddiga", name: "Akshay Buddiga"},
  {nodeIndex: 1, username: "alberthuynh91", name: "Albert Huynh"},
  {nodeIndex: 2, username: "asu91", name: "Alex Su"},
  {nodeIndex: 3, username: "alexanthony813", name: "Alex Anthony"},
  {nodeIndex: 4, username: "bignell", name: "Alex Bignell"},
  {nodeIndex: 5, username: "chououtside", name: "Alex Chou"},
  {nodeIndex: 6, username: "yaliceme", name: "Alice Yu"},
  {nodeIndex: 7, username: "aarti156", name: "Arthi Palaniappan"},
  {nodeIndex: 8, username: "boyajay", name: "Boya Jiang"},
  {nodeIndex: 9, username: "brianronaghan", name: "Brian Ronaghan"},
  {nodeIndex: 10, username: "carlosyasu91", name: "Yasu Flores"},
  {nodeIndex: 11, username: "christo4b", name: "Chris Bassano"},
  {nodeIndex: 12, username: "denizmekik", name: "Deniz Mekik"},
  {nodeIndex: 13, username: "Rhombus33", name: "Diamond Wheeler"},
  {nodeIndex: 14, username: "LeeGar", name: "Gar Lee"},
  {nodeIndex: 15, username: "hamzahc1", name: "Hamzah Chaudhary"},
  {nodeIndex: 16, username: "hiteshlala", name: "Hitesh Lala"},
  {nodeIndex: 17, username: "jackie77", name: "Jackie Liu"},
  {nodeIndex: 18, username: "jakeshasteen", name: "Jake Shasteen"},
  {nodeIndex: 19, username: "jblza", name: "Jonathan Blaising"},
  {nodeIndex: 20, username: "joeycchin", name: "Joey Chin"},
  {nodeIndex: 21, username: "kathyems", name: "Kathy Ems"},
  {nodeIndex: 22, username: "Aniroel", name: "Leo Baybay"},
  {nodeIndex: 23, username: "leranf", name: "Leran Firer"},
  {nodeIndex: 24, username: "m6cheung", name: "Michael Cheung"},
  {nodeIndex: 25, username: "oliverbhuang", name: "Oliver Huang"},
  {nodeIndex: 26, username: "pavelmp", name: "Pavel Parshakov"},
  {nodeIndex: 27, username: "peterlollo", name: "Peter Lollo"},
  {nodeIndex: 28, username: "rsboggs", name: "Robert Boggs"},
  {nodeIndex: 29, username: "RossAD", name: "Ross Davis"},
  {nodeIndex: 30, username: "sumosam", name: "Saumitra Saha"},
  {nodeIndex: 31, username: "SteffenBerlin", name: "Steffen Baumgarten"},
  {nodeIndex: 32, username: "tchamberlain", name: "Taylor Chamberlain"},
  {nodeIndex: 33, username: "tiffeli", name: "Tiffany Thong"},
  {nodeIndex: 34, username: "vincentvpham", name: "Vincent Pham"},
  {nodeIndex: 35, username: "xuejinglu", name: "Jing Lu"},
  {nodeIndex: 36, username: "lindayezou", name: "Linda Zou"}
];

if (Nodes.findOne({}) === undefined) {
  Nodes.remove({});
  nodesToInsert.forEach(function(node){
    Nodes.insert(node);
  });
}

Meteor.methods({
  "addLink": function (sourceUsername, targetName) {
    var sourceIndex = Nodes.findOne({username: sourceUsername}).nodeIndex;
    var targetIndex = Nodes.findOne({name: targetName}).nodeIndex;

    if (Links.findOne({$or: [
      {source: sourceIndex, target: targetIndex},
      {source: targetIndex, target:sourceIndex}]}) === undefined) {
      Links.insert({source: sourceIndex, target: targetIndex});
    }
  },
  "removeLink": function (sourceUsername, targetName) {
    var sourceIndex = Nodes.findOne({username: sourceUsername}).nodeIndex;
    var targetIndex = Nodes.findOne({name: targetName}).nodeIndex;
    Links.remove({source: sourceIndex, target: targetIndex});
  }
});
