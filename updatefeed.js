var parser = require("xml2json");
var fetch = require("node-fetch");
var fs = require("fs");

const feedUrl =
  "https://independent.bbvms.com/mrss/video_section/1620815501871799";

const saveAsFile = (data) => {
  fs.writeFile("public/feed.json", data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
};
const convertFile = (xml) => {
  var data = parser.toJson(xml, { object: true });
  return JSON.stringify(data);
};

const feed = fetch(feedUrl);
feed.then((res) => res.text()).then((body) => saveAsFile(convertFile(body)));
