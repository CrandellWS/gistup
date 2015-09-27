var queue = require("queue-async");

var UserError = require("./user-error");

module.exports = function(error) {
  if (error) {
    if (error.type === UserError) {
      console.warn("\033[91mERROR:\033[0m " + error.message);
      console.warn("\033\033Did you read the README.md?\033It might Help.")
      process.exit(1);
    }
    throw error;
  }
  return queue(1);
};
