// fix for jsonwebtoken credits: https://stackoverflow.com/questions/52530289/module-not-found-error-cant-resolve-crypto-in-opt-lampp-htdocs-angular-te
const fs = require("fs");
const f =
  "node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js";

fs.readFile(f, "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(
    /node: false/g,
    "node: {crypto: true, stream: true}"
  );

  fs.writeFile(f, result, "utf8", function(err) {
    if (err) return console.log(err);
  });
});
