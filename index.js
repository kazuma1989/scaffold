const tar = require("tar");

module.exports = async function scaffold(file) {
  await tar.extract({
    strip: 1,
    file
  });

  console.log("finished");
};
