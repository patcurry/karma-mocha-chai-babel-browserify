(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//const L = require('leaflet')

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">\n    OpenStreetMap</a>',
  minZoom: 2,
  maxZoom: 19
});

var myMap = new L.Map('mapid', {
  center: { lat: 0, lng: 8.8460 },
  zoom: 2,
  layers: osm,
  scrollWheelZoom: false
});

module.exports = {
  osm: osm,
  myMap: myMap
};

},{}]},{},[1]);
