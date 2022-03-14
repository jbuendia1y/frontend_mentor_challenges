module.exports = function getBaseUrl() {
  const NODE_ENV = process.env.NODE_ENV;
  const folder = process.cwd().split("/").slice(-1)[0];

  if (NODE_ENV === "production") {
    return "/frontend_mentor_challenges/" + folder + "/";
  } else {
    return "./";
  }
};
