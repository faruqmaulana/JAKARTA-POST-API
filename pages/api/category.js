import { children } from "cheerio/lib/api/traversing";
import middleware from "./middleware/middleware";
import { cors, axios, cheerio, BASE_URL, BASE_URL_SLUG } from "./utils/utils";

export default async function handler(req, res) {
  await middleware(req, res, cors);

  let result = axios.get(BASE_URL).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    let list = $("div.no-padding .row");
    let index = [];
    for (let iterate = 1; iterate <= 15; iterate++) {
      const slug = $(`li.tjp-li-${iterate}`)
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

      // const html = $.html(
      //   $(`li.tjp-li-${iterate}`).children().last().children().children()
      // );

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
    index.shift();
    index.shift();
    index.shift();
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

// const slug = $(this).find("li a.tjp-has-submenu").attr("href");
// const category = $(this).find("a.tjp-has-submenu").text();
// const cat = $(this).find("").text();
// const getSubCat = $(this).find("ul li");

// getSubCat.each(function (x, y) {
//   const name = $(this).find("li a").text();
//   const slug = $(this).find("li a").attr("href");
//   // console.log({ category, slug, name });
// });
// if (slug !== undefined) {
// }

// list.each(function (v, i) {
//   const dataNav = $(this).find("li").clone().children().remove().end();
//   dataNav.each(function (x, y) {
//     const slug = $(this).attr("href");
//     const category = $(this)
//       .text()
//       .replace(/^\s+|\s+$/gm, "");
//     const html = $.html($(this));
//   });
// });
