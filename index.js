const https = require("https");
const tar = require("tar");

module.exports = async function scaffold({ user, repo, branch = "master" }) {
  const url = `https://codeload.github.com/${user}/${repo}/tar.gz/${branch}`;

  https.get(url, res => res.pipe(tar.extract({ strip: 1 })));
};
