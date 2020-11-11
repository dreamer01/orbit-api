const intercept = (req, res, next) => {
  try {
    if (req) {
      // Request details log template
      const reqInfo = `~ [${new Date().getTime()}]\tRequest \t${req.method}\t${
        req.originalUrl
      }`;

      // Logging request body when not in production
      if (process.env.NODE_ENV !== 'production') {
        switch (req.method) {
          case 'GET':
          case 'DELETE':
            console.log(reqInfo);
            break;
          case 'POST':
          case 'PUT':
            console.log(reqInfo, req.body);
            break;
          default:
            console.log(reqInfo);
            break;
        }
      } else {
        console.log(reqInfo);
      }
    }
    if (res) {
      const oldWrite = res.write;
      const oldEnd = res.end;

      const chunks = [];

      res.write = (...restArgs) => {
        chunks.push(Buffer.from(restArgs[0]));
        oldWrite.apply(res, restArgs);
      };

      res.end = (...restArgs) => {
        // Response details log template
        const resInfo = `~ [${new Date().getTime()}]\tResponse\t${
          req.method
        }\t${req.originalUrl}\t${res.statusCode}\t`;

        // Intercepting response body
        // if (restArgs[0]) {
        //   chunks.push(Buffer.from(restArgs[0]));
        // }
        // const body = Buffer.concat(chunks).toString("utf8");

        console.log(resInfo);
        console.log(
          `~ [${new Date().getTime()}]\Stats D\t${req.originalUrl}\t${
            res.statusCode
          }\t`
        );
        oldEnd.apply(res, restArgs);
      };
    }
    next();
  } catch (error) {
    console.log('Marker Intercept Error : ', error);
    next();
  }
};

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

module.exports = intercept;
