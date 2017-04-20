var assert = require('assert');
var authCAS = require('./lib/auth-cas');

it('A CAS host must be specified', function(){
  assert.throws(
    () =>{
      new authCAS();
    }, "CAS host must be specified"
  );
  assert.throws( ()=>{
  });
});

it('A CAS host must be specified', function(){
  assert.throws(
    () => {
      
    });
});
