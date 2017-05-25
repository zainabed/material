describe('Testing User module', function(){
  beforeEach(function(){
    module('z-test');
  });

  var User = null;

  beforeEach(
    inject(function(_User_){
        User = _User_;
    })
  );

  afterEach(function(){
    User = null;
  });

  it('User object should be defined', function(){
    expect(User).toBeDefined();
  });

  it('User object should have getName method defiend', function(){
    expect(angular.isFunction(User.getName)).toBe(true);
  });

  it('User object should have setName method defined', function(){
    expect(angular.isFunction(User.setName)).toBe(true);
  });

  it('User setName and getName should set & get same string value', function(){
    var testName = "Test";
    User.setName(testName);
    expect(User.getName()).toEqual(testName);
  });
});
