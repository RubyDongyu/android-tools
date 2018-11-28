var console = require('console');
var net = require('net');
var events = require('events');
var util = require('util');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var config = require('./config');

var adb = `${config.BINPATH}adb`;

exports.devices = devices;

function devices() {
    console.log('adb devices');
    //command = spawn('adb', ['devices']);
    command = `${adb} devices`;
    console.log(command);
    exec(command, (err, stdout, stderr) => {
        if (err) {
	    console.log(`adb devices error: ${stderr}`)
	} else {
	    console.log(`adb devices: ${stdout}`);
	}
    });
    /**

    command.stdout.on('data', (data) => {
        console.log(`adb devices return: ${data}`);
    });

    command.stderr.on('data', (data) => {
        console.log(`adb devices return: ${data}`);
    });

    command.on('exit', (code, signal) => {
        console.log(`adb devices return: ${code}`);
    });
    */
}
