exports.envVal = function(string) {
  if(process.platform === "win32"){
    return "%" + string + "%";
  } else {
    return "$" + string;
  }
}

exports.newEnvVal = function(key, value, env) {
  if (env === undefined) {
    env = process.env;
  }
  var varName,
    envArgv,
    envCopy = {};
  for (varName in env) {
    envCopy[varName] = env[varName];
  }
  envCopy[key] = value;
  return envCopy;
}
