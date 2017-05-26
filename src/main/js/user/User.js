angular.module('z-test')
 .factory('User', function(){
   function User() {
   }

   User.prototype.getName = function(){
     return this.name;
   }

   User.prototype.setName  = function(name) {
     this.name = name;
   }

   return User;
 });
