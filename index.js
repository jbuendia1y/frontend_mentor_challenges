const ghpages = require("gh-pages");
const path = require("path");
const rimraf = require("rimraf");

async function main() {
  const ghpagesDir = path.join(__dirname, "./gh-pages");
  const timeLabel = "Publicado a Github Pages";

  console.time(timeLabel);
  await ghpages.publish(ghpagesDir, (err) => {
    if (!err) {
      rimraf.sync(ghpagesDir);
    } else console.log(err);

    console.timeEnd(timeLabel);
  });
}

main();
