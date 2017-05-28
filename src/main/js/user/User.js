angular.module('z-test')
 .factory('User', function(){
   function User() {
   }

   User.prototype.getName = function(){
     return this.name;
   };

   User.prototype.setName  = function(name) {
     this.name = name;
   };

   User.prototype.setUserId = function(userId) {
     this.userId = userId;
   };

   User.prototype.getUserId = function(){
     return this.userId;
   };
   return User;
 });
