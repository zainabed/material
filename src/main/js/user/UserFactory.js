angular.module('z-test')
.service('UserFactory', UserFactory);

function UserFactory(User){
  this.user = User;
}

UserFactory.prototype.create = function(){
  return new this.user();
};
