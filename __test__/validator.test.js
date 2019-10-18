'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... TRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    let num = 1;
    expect(validator.isNumber(num)).toBeTruthy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isArray(arr)).toBeTruthy();
  });

  it('objects', () => {
    let obj = {x:'y'};
    expect(validator.isObject(obj)).toBeTruthy();
  });

  it('booleans', () => {
    let bool = false;
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    let func = () => {};
    expect(validator.isFunction(func)).toBeTruthy();
  });

});

describe('validator module performs complex validations', () => {

  xit('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeFalsy();
  });

  xit('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  xit('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  xit('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});
