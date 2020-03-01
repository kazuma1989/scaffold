// @ts-check
const https = require("https");
const tar = require("tar");

module.exports = async function scaffold({
  user,
  repo,
  branch = "master",
  subdir
}) {
  const url = `https://codeload.github.com/${user}/${repo}/tar.gz/${branch}`;

  https.get(url, res =>
    res.pipe(
      subdir
        ? tar.extract({ strip: 2 }, [`${repo}-${branch}/${subdir}`])
        : tar.extract({ strip: 1 })
    )
  );
};
