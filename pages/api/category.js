import middleware from "./middleware/middleware";
import {
  cors,
  BASE_URL_SLUG,
  ERROR_MESSAGE,
  VERCEL_BASE_URL,
} from "./utils/const";
import { scrapeSite } from "./utils/utils";

export default async function handler(req, res) {
  await middleware(req, res, cors);

  try {
    // make request
    const { $, status } = await scrapeSite("");

    // get category
    let category = [];
    for (let iterate = 4; iterate <= 13; iterate++) {
      const getLink = $("li.tjp-li-" + iterate)
        .children()
        .first()
        .attr("href")
        .replace(BASE_URL_SLUG, "");

      const link =
        getLink === "/multimedia"
          ? VERCEL_BASE_URL + "/category/front-row"
          : VERCEL_BASE_URL + "/category" + getLink;

      const getName = $("li.tjp-li-" + iterate)
        .children()
        .first()
        .text()
        .replace(/^\s+|\s+$/gm, "");

      const name = getName === "MULTIMEDIA" ? "FRONT ROW" : getName;

      //get sub category
      let categories = [];
      $("li.tjp-li-" + iterate)
        .children()
        .last()
        .children()
        .find("a")
        .each((i, el) => {
          const sub_category = $(el).text();
          const getSubLink = $(el)
            .attr("href")
            .replace(BASE_URL_SLUG, VERCEL_BASE_URL + "/category");

          const sub_link =
            getSubLink === VERCEL_BASE_URL + "/category/multimedia/podcast"
              ? VERCEL_BASE_URL + "/podcast"
              : getSubLink;

          return categories.push({
            sub_link,
            sub_category,
          });
        });

      category.push({
        link,
        name,
        categories: categories.length !== 0 ? categories : null,
      });
    }
    category.splice(1, 1);
    return res.json({ status, category });
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
