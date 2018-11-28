adt = require('./adt');

adb = adt.adb;
adb.devices();

fastboot = adt.fastboot;
fastboot.devices();
