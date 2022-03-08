import middleware from "./middleware/middleware";
import { cors, axios, cheerio, BASE_URL } from "./utils/utils";

export default async function handler(req, res) {
  await middleware(req, res, cors);

  let result = axios.get(BASE_URL + "most-viewed").then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    let list = $(".bgSingle .listNews");
    let index = [];

    list.each(function (v, i) {
      const slug = $(".imageNews", this)
        .find("a")
        .attr("href")
        .replace(".html", "");

      const pusblised_at = $(this)
        .find("span.date")
        .clone()
        .children()
        .remove()
        .end()
        .text();

      const category = $("span span", this).text();
      const title = $(this).find(".titleNews").text().trim();
      const image = $(".imageNews", this).find("img").attr("data-src");

      index.push({
        slug,
        title,
        image,
        category,
        pusblised_at,
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
