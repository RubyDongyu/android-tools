var console = require('console');
var net = require('net');
var events = require('events');
var util = require('util');

exports.devices = devices;

function devices() {
    console.log('adb devices');
}
