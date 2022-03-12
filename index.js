const ghpages = require("gh-pages");
const path = require("path");

const ghpagesDir = path.join(__dirname, "../gh-pages");

const timeLabel = "Publicado a Github Pages";

console.time(timeLabel);
ghpages.publish(ghpagesDir, () => {
  console.timeEnd(timeLabel);
});
