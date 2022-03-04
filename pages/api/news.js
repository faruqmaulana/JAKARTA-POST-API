import middleware from "./middleware/middleware";
const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.tribunnews.com/index-news";
const Cors = require("cors");
const cors = Cors({
  methods: ["POST"],
});

export default async function handler(req, res) {
  await middleware(req, res, cors);

  let result = axios.get(url).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    let list = $("select#sectionpil > option");
    let index = [];

    list.each(function (v, i) {
      let link = url + "/" + $(this).attr("value");
      let title = $(this).text();

      index.push({
        title,
        link,
      });
    });
    return {
      message: "succes",
      result: {
        length: index.length,
        data: index,
      },
    };
  });

  return res.json(await result);
}
