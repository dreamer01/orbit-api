const error = (message = "", options) => {
  let errorInfo = "";
  if (options) {
    const { level = "" } = options;
    errorInfo = `~ [${new Date().getTime()}]\tError|${level}\t`;
  } else {
    errorInfo = `~ [${new Date().getTime()}]\tError\t`;
  }
  console.debug(errorInfo, message);

  if (process.env.NODE_ENV !== "production") {
    console.trace("");
  }
};

module.exports = error;
