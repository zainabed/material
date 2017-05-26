angular.module('z-test')
.service('ProfileFactory', ProfileFactory);

function ProfileFactory(Profile){
  this.profile = Profile;
}

ProfileFactory.prototype.create = function(userObj){
  return new this.profile(userObj);
};
