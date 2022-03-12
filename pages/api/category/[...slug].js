import middleware from "../middleware/middleware";
import {
  cors,
  axios,
  cheerio,
  BASE_URL,
  turndownService,
  VERCEL_HOST,
} from "../utils/utils";

export default async function handler(req, res) {
  await middleware(req, res, cors);
  const { slug } = req.query;
  const query = slug.length !== 2 ? slug.splice(2).join("=") : slug.join("/");
  const REQUEST_URL = slug.join("/") + "?" + query;

  //make request
  let result = axios
    .get(BASE_URL + REQUEST_URL)
    .then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);

      //featured_posts
      const slug =
        VERCEL_HOST +
        "detailpost" +
        $(".bigHeadline .descNews a").next().attr("href").replace(".html", "");
      const images = $("figure img").attr("data-src");
      const caption_image = $("figcaption").text().trim();
      const headline = $(".descNews p").first().text().trim();
      const title = $(".descNews h2.titleNews").first().text().trim();
      const category = $(".descNews span.dt-news").first().text().trim();
      const pusblised_at = $(".bigHeadline .descNews span")
        .last()
        .text()
        .trim();
      const featured_post = [
        {
          slug,
          title,
          images,
          headline,
          category,
          caption_image,
          pusblised_at,
        },
      ];

      //posts
      let list = $(".tjp-newsListing .listNews");
      let index = [];

      list.each(function (v, i) {
        const pusblised_at = $(this)
          .find(".latestDetail span.date")
          .last()
          .text();
        const badge = $(this)
          .find("a span.premiumBadge span")
          .text()
          .replace(/^\s+|\s+$/gm, "");
        const slug =
          VERCEL_HOST +
          "detailpost" +
          $(".imageLatest", this).find("a").attr("href").replace(".html", "");

        const headline = turndownService.turndown(
          $(this).find(".latestDetail p").html()
        );
        const category = $(this).find(".dt-news").text();
        const title = $(this).find(".titleNews").text().trim();
        const premium_badge = badge === "" ? "not premium" : badge;
        const image = $(".imageLatest", this).find("img").attr("data-src");

        index.push({
          slug,
          title,
          image,
          headline,
          category,
          pusblised_at,
          premium_badge,
        });
      });

      return {
        message: "succes",
        result: {
          featured_post,
          posts: index,
        },
      };
    })
    .catch((err) => {
      return {
        message: "failed get data",
      };
    });

  return res.json(await result);
}
