const debugMethod = require('./debug');
const errorMethod = require('./error');
const infoMethod = require('./info');
const interceptMethod = require('./intercept');

// Batch if in production

module.exports = { debug, error, info, intercept };
