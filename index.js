const ghpages = require("gh-pages");
const path = require("path");
const rimraf = require("rimraf");

const ghpagesDir = path.join(__dirname, "./gh-pages");

const timeLabel = "Publicado a Github Pages";

console.time(timeLabel);
ghpages.publish(ghpagesDir, (err) => {
  if (!err) {
    rimraf.sync(ghpagesDir);
  }
  console.log(err);
  console.timeEnd(timeLabel);
});
