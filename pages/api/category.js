import runMiddleware from "./middleware/middleware";
import {
  cors,
  BASE_URL_SLUG,
  ERROR_MESSAGE,
  VERCEL_BASE_URL,
} from "./utils/const";
import { scrapeSite } from "./utils/utils";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  try {
    // make request
    const { $, status } = await scrapeSite("");

    // get category
    let category = [];
    for (let iterate = 4; iterate <= 13; iterate++) {
      const isLink = $("li.tjp-li-" + iterate)
        .children()
        .first()
        .attr("href")

      // check if data is undefined 
      const getLink = isLink && isLink.replace(BASE_URL_SLUG, "");

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
      let subCategory = [];
      $("li.tjp-li-" + iterate)
        .children()
        .last()
        .children()
        .find("a")
        .each((i, el) => {
          const name = $(el).text();
          const getSubLink = $(el)
            .attr("href")
            .replace(BASE_URL_SLUG, VERCEL_BASE_URL + "/category");

          const link =
            getSubLink === VERCEL_BASE_URL + "/category/multimedia/podcast"
              ? VERCEL_BASE_URL + "/podcast"
              : getSubLink;

          return subCategory.push({
            name,
            link,
          });
        });

      category.push({
        name,
        link,
        subCategory: subCategory.length !== 0 ? subCategory : null,
      });
    }
    // delete "most-shared" category, because "most-shared" category contains nothing
    category.splice(1, 1);
    // delete "Longform Biz" sub-category, because "Longform Biz" sub-category does not contains news or podcasts
    category[7].subCategory.splice(2, 1);
    return res.json({ status, category });
  } catch (e) {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
