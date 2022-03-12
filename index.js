const ghpages = require("gh-pages");
const path = require("path");

const ghpagesDir = path.join(__dirname, "../gh-pages");

console.time("Publicando");
ghpages.publish(ghpagesDir, () => {
  console.timeEnd("Publicado a Github Pages");
});
