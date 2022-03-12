import { children } from "cheerio/lib/api/traversing";
import middleware from "./middleware/middleware";
import {
  cors,
  axios,
  cheerio,
  BASE_URL,
  BASE_URL_SLUG,
  VERCEL_HOST,
} from "./utils/utils";

export default async function handler(req, res) {
  await middleware(req, res, cors);

  let result = axios.get(BASE_URL).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    let index = [];
    for (let iterate = 4; iterate <= 15; iterate++) {
      const slug =
        VERCEL_HOST +
        "category" +
        $(`li.tjp-li-${iterate}`)
          .children()
          .first()
          .attr("href")
          .replace(BASE_URL_SLUG, "");
      const name = $(`li.tjp-li-${iterate}`)
        .children()
        .first()
        .text()
        .replace(/^\s+|\s+$/gm, "");

      const sub = $(`li.tjp-li-${iterate}`)
        .children()
        .last()
        .children()
        .find("a");

      let categories = [];
      sub.each(function (i, e) {
        const sub_slug = $(this).attr("href").replace(BASE_URL_SLUG, "");
        const sub_category = $(this).text();
        return categories.push({
          sub_slug,
          sub_category,
        });
      });
      index.push({
        slug,
        name,
        categories: categories.length !== 0 ? categories : null,
      });
    }
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
