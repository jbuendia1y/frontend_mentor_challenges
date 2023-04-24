const ghpages = require("gh-pages");
const path = require("path");
const rimraf = require("rimraf");
const exec = require("child_process").exec;

const execBuild = () => {
  return new Promise((resolve, reject) => {
    const timeLabel = "Compilado";
    console.time(timeLabel);
    const buildScript = exec("bash ./build.sh");
    buildScript.on("close", (code, signal) => {
      console.timeEnd(timeLabel);
      if (code > 0) {
        reject(
          new Error(
            signal
              ? signal.toString()
              : "Ocurrió un error en el proceso de compilado"
          )
        );
        return;
      }
      resolve();
    });
  });
};

async function main() {
  const ghpagesDir = path.join(__dirname, "./gh-pages");
  await execBuild();
  const timeLabel = "Publicado a Github Pages";

  console.time(timeLabel);
  ghpages.publish(ghpagesDir, (err) => {
    if (!err) {
      rimraf.sync(ghpagesDir);
    }
    console.log(err);
    console.timeEnd(timeLabel);
  });
}

main();
