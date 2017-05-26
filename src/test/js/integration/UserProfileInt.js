describe('Integration test for User and Profile class', function(){

  beforeEach(function(){
    module('z-test');
  });

  var UserFactory = null;
  var userOjb = null;
  var profileObj = null;
  var ProfileFactory = null;

  beforeEach(
    inject(function(_UserFactory_, _ProfileFactory_){
      UserFactory = _UserFactory_;
      ProfileFactory = _ProfileFactory_;
    })
  );

  beforeEach(function(){
    userOjb = UserFactory.create();
    userOjb.setName('zainabed');
    userOjb.setUserId(1234);
    profileObj = ProfileFactory.create(userOjb);


  });

  afterEach(function(){
    userOjb = UserFactory = profileObj = ProfileFactory = null;
  });

  it('If firstName and lastName is not set for Profile then it get added by User object', function(){
    profileObj.setFirstName();
    expect(profileObj.getFirstName()).toEqual(userOjb.getName());

    profileObj.setLastName();
    expect(profileObj.getLastName()).toEqual(userOjb.getName());
  });

  it('User object id and Profile user id should be same', function(){
    profileObj.setUserId();
    expect(profileObj.getUserId()).toEqual(userOjb.getUserId());
  });
});
