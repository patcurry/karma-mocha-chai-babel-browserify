(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Without this line the tests will fail in firefox the Object.values() function
// is not supported. That is unfortunate, but getting around it means that there
// will be far less code for the browser to deal with... I think
// import "babel-polyfill"

var square = function square(n) {
  return n * n;
};
var obj = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
var keys = Object.keys(obj);
var vals = Object.values(obj);

module.exports.square = square;
module.exports.obj = obj;
module.exports.keys = keys;
module.exports.vals = vals;

},{}]},{},[1]);
