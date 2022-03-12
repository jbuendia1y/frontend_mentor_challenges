const ghpages = require("gh-pages");
const path = require("path");

const ghpagesDir = path.join(__dirname, "../gh-pages");

console.time("PUBLISHING");
ghpages.publish(ghpagesDir, () => {
  console.timeEnd("PUBLISHED");
});
