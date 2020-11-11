const debug = (message = '', level = '') => {
  if (process.env.NODE_ENV !== 'production') {
    let debugInfo = '';
    if (level) {
      debugInfo = `~ [${new Date().getTime()}]\tDebug|${level}\t`;
    } else {
      debugInfo = `~ [${new Date().getTime()}]\tDebug\t`;
    }
    console.debug(debugInfo, message);
  }
};

module.exports = debug;
