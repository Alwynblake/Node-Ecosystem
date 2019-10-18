'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
 validator.isNumber = (input) => {
 return typeof input === 'number';
 };

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
 validator.isArray = (input) => {
   return Array.isArray(input);
 };

 validator.isObject = (input) => {
   return typeof input === 'object';
 };

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};
