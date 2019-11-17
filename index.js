const tar = require("tar");

const [, , file] = process.argv;

tar
  .extract({
    strip: 1,
    file
  })
  .then(console.log);
