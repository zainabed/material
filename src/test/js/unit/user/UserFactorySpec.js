describe('Unit test for UserFactory class', function(){

  beforeEach(function(){
    module('z-test');
  });

  var UserFactory = null;
  var User = null;

  beforeEach(function(){
    module(function($provide){
      $provide.factory('User', function(){
        return function User(){};
      });
    });
  });

  beforeEach(
    inject(function(_UserFactory_, _User_){
      UserFactory = _UserFactory_;
      User = _User_;
    })
  );

  it('UserFactory class should be defined', function(){
    expect(UserFactory).toBeDefined();
  });

  it('UserFactory class should have create method defined', function(){
    expect(angular.isFunction(UserFactory.create)).toBe(true);
  });

  it('UserFactory class method create should return instance object of class User', function(){
    var userObj = UserFactory.create();
    expect(userObj instanceof User).toBe(true);
  });

});
