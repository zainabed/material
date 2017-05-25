angular.module('z-test')
 .factory('User', function(){
   return new User();
 });

function User() {
}

User.prototype.getName = function(){
  return this.name;
}

User.prototype.setName  = function(name) {
  this.name = name;
}
