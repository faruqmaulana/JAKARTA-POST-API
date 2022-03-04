import { first } from "cheerio/lib/api/traversing";
import middleware from "./middleware/middleware";
const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.thejakartapost.com/indonesia/politics";
const Cors = require("cors");
const cors = Cors({
  methods: ["POST"],
});

export default async function handler(req, res) {
  await middleware(req, res, cors);

  let result = axios.get(url).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    let list = $(".tjp-newsListing .listNews");
    let index = [];

    list.each(function (v, i) {
      const url = "https://www.thejakartapost.com";
      const title = $(this).find(".titleNews").text().trim();
      /* prettier-ignore */
      const badge = $(this).find("a span.premiumBadge span").text().replace(/^\s+|\s+$/gm, "");
      const premium_badge = badge === "" ? "not premium" : badge;
      const category = $(this).find(".dt-news").text();
      const link = url + $(".imageLatest", this).find("a").attr("href");
      const lazy_image = url + $(".imageLatest", this).find("img").attr("src");
      const alt_image = $(".imageLatest", this).find("img.lazy").attr("alt");

      index.push({
        title,
        category,
        premium_bdge,
        lazy_image,
        alt_image,
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
