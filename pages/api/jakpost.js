import { first } from "cheerio/lib/api/traversing";
import middleware from "./middleware/middleware";
const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.thejakartapost.com/indonesia/jakarta";
const Cors = require("cors");
const cors = Cors({
  methods: ["POST"],
});

export default async function handler(request, response) {
  await middleware(request, response, cors);

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
      /* prettier-ignore */
      const slug = $(".imageLatest", this).find("a").attr("href").replace(/([a-zA-Z])/g, "");
      const lazy_image = url + $(".imageLatest", this).find("img").attr("src");
      const alt_image = $(".imageLatest", this).find("img.lazy").attr("alt");

      index.push({
        slug,
        title,
        category,
        premium_badge,
        lazy_image,
        alt_image,
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

  return response.json(await result);
}
