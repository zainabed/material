describe('Unit test cases for ProfileFactory class', function(){
  beforeEach(function(){
    module('z-test');
  });

  var ProfileFactory = null;
  var Profile = null;

  beforeEach(function(){
    module(function($provide){

      $provide.factory('Profile', function(){
        return function Profile(){};
      })
    });
  });

  beforeEach(
    inject(function(_ProfileFactory_, _Profile_){
      ProfileFactory = _ProfileFactory_;
      Profile = _Profile_;
    })
  );

  afterEach(function(){
    ProfileFactory = Profile = null;
  });

  it('ProfileFactory service should be defined', function(){
    expect(ProfileFactory).toBeDefined();
  });

  it('ProfileFactory service should have create method', function(){
    expect(angular.isFunction(ProfileFactory.create)).toBe(true);
  });

  it('ProfileFactory service method should return a new object of Profile class', function(){
    var profileObj = ProfileFactory.create();
    expect(profileObj instanceof Profile).toBe(true);
  });
});
