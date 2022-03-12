import middleware from "./middleware/middleware";
import { cors, CATEGORY, BASE_URL_SLUG } from "./utils/const";
import { scrapeSite } from "./utils/utils";

export default async function handler(req, res) {
  await middleware(req, res, cors);
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
      getLink !== "/most-viewed"
        ? CATEGORY + "/category" + getLink
        : CATEGORY + getLink;

    const name = $("li.tjp-li-" + iterate)
      .children()
      .first()
      .text()
      .replace(/^\s+|\s+$/gm, "");

    //get sub category
    let categories = [];
    $("li.tjp-li-" + iterate)
      .children()
      .last()
      .children()
      .find("a")
      .each((i, el) => {
        const sub_category = $(el).text();
        const sub_link =
          CATEGORY +
          "/category" +
          $(el).attr("href").replace(BASE_URL_SLUG, "");

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
  return res.json({ status, category });
}
