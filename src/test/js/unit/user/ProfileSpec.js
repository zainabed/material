describe('Test case of User Profile object', function(){
  beforeEach(function(){
    module('z-test');
  });

  var ProfileFactory = null;
  var Profile = null;
  var User = null;

  beforeEach(function(){
    module(function($provide){
      $provide.factory('User', function(){
        return new function(){
          this.getUserId = function(){};
        }
      });
    });

  });

  beforeEach(
    inject(function(_Profile_, _User_){
      ProfileFactory = _Profile_;
      User = _User_;
    })
  );

  beforeEach(function(){
    Profile = new ProfileFactory(User);
  });

  afterEach(function(){
    Profile = User = ProfileFactory = null;
  });

  it('Profile object should be defined', function(){
    expect(Profile).toBeDefined();
  });

  describe('Test case for Profile function defination', function(){
    it('Profile class should have setFirstName defined', function(){
        expect(angular.isFunction(Profile.setFirstName)).toBe(true);
    });

    it('Profile class should have getFirstName defined', function(){
      expect(angular.isFunction(Profile.getFirstName)).toBe(true);
    });

    it('Profile class should have setLastName defined', function(){
        expect(angular.isFunction(Profile.setLastName)).toBe(true);
    });

    it('Profile class should have getLastName defined', function(){
      expect(angular.isFunction(Profile.getLastName)).toBe(true);
    });

    it('Profile class should have setUserId defined', function(){
        expect(angular.isFunction(Profile.setUserId)).toBe(true);
    });

    it('Profile class should have getUserId defined', function(){
      expect(angular.isFunction(Profile.getUserId)).toBe(true);
    });
  });

  describe('Test case for Profile class method behaviour' , function(){
    var value = null;

    afterEach(function(){
        value = null;
    });

    it('Profile method getFirstName should return same value which is set using setFirstName', function(){
      value = 'test value';
      Profile.setFirstName(value);
      expect(Profile.getFirstName()).toEqual(value);
    });

    it('Profile method getLastName should return same value which is set using setLastName', function(){
      value = 'test value';
      Profile.setLastName(value);
      expect(Profile.getLastName()).toEqual(value);
    });

    it('Profile method getUserId should return same value which is set using setUserId', function(){
      value = 'test value';
      spyOn(User, 'getUserId').and.returnValue(value);
      Profile.setUserId();
      expect(Profile.getUserId()).toEqual(value);
    });
  });

});
