var os = require('os');

exports.OSTYPE = os.type();
exports.OSPLATFORM = os.platform();
exports.OSARCH = os.arch();
exports.BINPATH = `${__dirname}/../bin/${os.platform()}/`;
