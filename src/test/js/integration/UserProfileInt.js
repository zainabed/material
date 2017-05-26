describe('Integration test for User and Profile class', function(){

  beforeEach(function(){
    module('z-test');
  });

  var User = null;
  var Profile = null;
  var ProfileFactory = null;

  beforeEach(
    inject(function(_User_, _ProfileFactory_){
      User = _User_;
      ProfileFactory = _ProfileFactory_;
    })
  );



});
