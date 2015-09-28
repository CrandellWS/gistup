var queue = require("queue-async");

var UserError = require("./user-error");

module.exports = function(error) {
  if (error) {
    if (error.type === UserError) {
      console.warn("\033[91mERROR:\033[0m " + error.message);
      process.exit(1);
    }
    if(error.message.match(/(Permission denied \(publickey\))|(Host key verification failed)/g)){
      console.warn("Did you read the README.md? \nIt might Help.");
      console.warn("Please make sure you have the correct access rights.");
      console.warn("You probably need to generate your SSH keys for GitHub.");
      console.warn("\n\033[4;94mhttps://help.github.com/articles/generating-ssh-keys\n\033[0m ");
      process.exit(1);
    }
    throw error;
  }
  return queue(1);
};
