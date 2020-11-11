// Dev logging
const error = (message = '', level = '') => {
  let errorInfo = '';
  if (level) {
    errorInfo = `~ [${new Date().getTime()}]\tError|${level}\t`;
  } else {
    errorInfo = `~ [${new Date().getTime()}]\tError\t`;
  }
  console.debug(errorInfo, message);
  console.trace('');
};

module.exports = error;
