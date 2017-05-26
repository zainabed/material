angular.module('z-test')
.factory('Profile', function(){

  function Profile(UserObj){
    this.user = UserObj;
  }

  Profile.prototype.setFirstName = function(firstName){
    this.firstName = firstName ? firstName : this.user.getName();
  }

  Profile.prototype.getFirstName = function(){
    return this.firstName;
  }

  Profile.prototype.setLastName = function(lastName) {
    this.lastName = lastName  ? lastName : this.user.getName();
  }

  Profile.prototype.getLastName = function(){
    return this.lastName;
  }

  Profile.prototype.setUserId = function() {
    this.userId = this.user.getUserId();
  }

  Profile.prototype.getUserId = function() {
    return this.userId;
  }

  return Profile;
});
