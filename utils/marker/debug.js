const debug = (message = "", options) => {
  if (process.env.NODE_ENV !== "production") {
    let debugInfo = "";
    if (options) {
      const { level = "" } = options;
      debugInfo = `~ [${new Date().getTime()}]\tDebug|${level}\t`;
    } else {
      debugInfo = `~ [${new Date().getTime()}]\tDebug\t`;
    }
    console.debug(debugInfo, message);
  }
};

module.exports = debug;
