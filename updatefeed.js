var fetch = require("node-fetch");
var fs = require("fs");

const feedUrl = "https://icanhazdadjoke.com/";

const saveAsFile = (data) => {
  fs.writeFile("public/feed.json", data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
};

const feed = fetch(feedUrl, {
  headers: { Accept: "application/json" },
  // headers: { "Content-Type": "application/json" },
});
feed
  .then((res) => res.text())
  .then((body) => {
    body = JSON.parse(body);
    body.updatedAt = new Date();
    body = JSON.stringify(body);
    return saveAsFile(body);
  });
