const assert = require('chai').assert;
const app = require('../app');

basicTestResult = app.basicTest();
describe('App', () => {

  it('app should return hello world', () => {
    assert.equal(basicTestResult, 'hello world');
  });

});