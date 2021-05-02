'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isArray = exports.isArray = function isArray(obj) {
  return Array.isArray(obj);
};

var buildState = exports.buildState = function buildState(props) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var state = {};
  Object.entries(props).forEach(function (prop) {
    var key = prop[0];
    var value = prop[1];

    if (key !== 'children') {
      state[key] = isArray(value) ? value[index] : value;
    }
  });

  state['index'] = index;
  return state;
};

var removeUnit = exports.removeUnit = function removeUnit(time) {
  return time.replace('s', '');
};

var convertToMs = exports.convertToMs = function convertToMs(time) {
  return time * 1000;
};