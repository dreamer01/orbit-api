class BatchRunner {
  constructor(batchLimit) {
    // console.log("Batch Limit ", batchLimit);
    this.batchLimit = batchLimit;
  }

  count = 0;
  logList = [];

  push(fxn) {
    if (this.count < this.batchLimit) {
      this.logList.push(fxn);
      this.count++;
    } else {
      let availableTasks = [...this.logList];
      this.logList = [fxn];
      this.count = 1;
      this.execute(availableTasks).catch((error) =>
        console.error("Batch Execution error : ", error)
      );
    }
  }

  execute(availableTasks = []) {
    return new Promise((resolve, reject) => {
      try {
        availableTasks.forEach((task) => task());
        resolve("Done.");
      } catch (error) {
        reject(error);
      }
    });
  }
}

// FIXME: For avoiding batching at all.
const batchRunner = new BatchRunner(process.env.MARKER_BATCH_LIMIT || 3);
module.exports = batchRunner;
