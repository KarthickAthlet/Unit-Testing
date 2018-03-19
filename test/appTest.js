const assert = require('chai').assert;
const app = require('../app');

basicTestResult = app.basicTest();
basicTypeTestResult = app.basicTypeTest();
describe('App', () => {

  it('app should return hello world', () => {
    assert.equal(basicTestResult, 'hello world');
  });

  it('app should return type string', () => {
    assert.typeOf(basicTypeTestResult, 'string');
  });

});