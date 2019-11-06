var require = meteorInstall({"imports":{"api":{"User.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/api/User.js                                                                       //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

module.export({
  User: () => User
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
const User = new Mongo.Collection('user');

if (Meteor.isServer) {
  Meteor.publish('user', () => {
    return User.find({});
  });
}

Meteor.methods({
  'user.add'(user) {
    User.insert((0, _objectSpread2.default)({}, user, {
      date: new Date()
    }));
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// server/main.js                                                                            //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let User;
module.link("../imports/api/User", {
  default(v) {
    User = v;
  }

}, 1);
Meteor.startup(() => {// code to run on server at startup
});
///////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".vue"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvVXNlci5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0IiwiVXNlciIsIk1vbmdvIiwibGluayIsInYiLCJNZXRlb3IiLCJDb2xsZWN0aW9uIiwiaXNTZXJ2ZXIiLCJwdWJsaXNoIiwiZmluZCIsIm1ldGhvZHMiLCJ1c2VyIiwiaW5zZXJ0IiwiZGF0ZSIsIkRhdGUiLCJkZWZhdWx0Iiwic3RhcnR1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUNDLE1BQUksRUFBQyxNQUFJQTtBQUFWLENBQWQ7QUFBK0IsSUFBSUMsS0FBSjtBQUFVSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNELE9BQUssQ0FBQ0UsQ0FBRCxFQUFHO0FBQUNGLFNBQUssR0FBQ0UsQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEvQztBQUFrRCxJQUFJQyxNQUFKO0FBQVdOLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0UsUUFBTSxDQUFDRCxDQUFELEVBQUc7QUFBQ0MsVUFBTSxHQUFDRCxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBRzlGLE1BQU9ILElBQUksR0FBRyxJQUFJQyxLQUFLLENBQUNJLFVBQVYsQ0FBcUIsTUFBckIsQ0FBZDs7QUFFUixJQUFHRCxNQUFNLENBQUNFLFFBQVYsRUFBb0I7QUFDaEJGLFFBQU0sQ0FBQ0csT0FBUCxDQUFlLE1BQWYsRUFBd0IsTUFBTTtBQUMxQixXQUFPUCxJQUFJLENBQUNRLElBQUwsQ0FBVSxFQUFWLENBQVA7QUFDSCxHQUZEO0FBR0g7O0FBRURKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlO0FBQ1gsYUFBV0MsSUFBWCxFQUFnQjtBQUNaVixRQUFJLENBQUNXLE1BQUwsaUNBQ09ELElBRFA7QUFFSUUsVUFBSSxFQUFFLElBQUlDLElBQUo7QUFGVjtBQUlIOztBQU5VLENBQWYsRTs7Ozs7Ozs7Ozs7QUNYQSxJQUFJVCxNQUFKO0FBQVdOLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0UsUUFBTSxDQUFDRCxDQUFELEVBQUc7QUFBQ0MsVUFBTSxHQUFDRCxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUlILElBQUo7QUFBU0YsTUFBTSxDQUFDSSxJQUFQLENBQVkscUJBQVosRUFBa0M7QUFBQ1ksU0FBTyxDQUFDWCxDQUFELEVBQUc7QUFBQ0gsUUFBSSxHQUFDRyxDQUFMO0FBQU87O0FBQW5CLENBQWxDLEVBQXVELENBQXZEO0FBR3pFQyxNQUFNLENBQUNXLE9BQVAsQ0FBZSxNQUFNLENBQ25CO0FBQ0QsQ0FGRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbydcbmltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InXG5cbmV4cG9ydCAgY29uc3QgIFVzZXIgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigndXNlcicpXG5cbmlmKE1ldGVvci5pc1NlcnZlciApe1xuICAgIE1ldGVvci5wdWJsaXNoKCd1c2VyJyAsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFVzZXIuZmluZCh7fSk7XG4gICAgfSlcbn1cblxuTWV0ZW9yLm1ldGhvZHMoe1xuICAgICd1c2VyLmFkZCcodXNlcil7XG4gICAgICAgIFVzZXIuaW5zZXJ0KHtcbiAgICAgICAgICAgIC4uLnVzZXIsIFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKVxuICAgICAgICB9KVxuICAgIH0sXG59KSIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IFVzZXIgIGZyb20gJy4uL2ltcG9ydHMvYXBpL1VzZXInXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcbn0pO1xuIl19
