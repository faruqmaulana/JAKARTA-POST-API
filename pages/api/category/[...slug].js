import middleware from "../middleware/middleware";
import { scrapeSite } from "../utils/utils";
import { cors, turndownService, VERCEL_BASE_URL } from "../utils/const";

export default async function handler(req, res) {
  await middleware(req, res, cors);

  //get query params
  const { slug } = req.query;
  const query = slug.length !== 2 ? slug.splice(2).join("=") : slug.join("/");
  const REQUEST_URL = slug.join("/") + "?" + query;

  //make request
  const { $, status } = await scrapeSite(REQUEST_URL);

  const posts = [];
  const link =
    VERCEL_BASE_URL +
    "/detailpost" +
    $(".bigHeadline .descNews a").next().attr("href").replace(".html", "");
  const image = $("figure img").attr("data-src");
  const image_desc = $("figcaption").text().trim();
  const headline = $(".descNews p").first().text().trim();
  const title = $(".descNews h2.titleNews").first().text().trim();
  const category = $(".descNews span.dt-news").first().text().trim();
  const pusblised_at = $(".bigHeadline .descNews span").last().text().trim();
  const featured_post = {
    link,
    title,
    image,
    headline,
    category,
    image_desc,
    pusblised_at,
  };

  $(".tjp-newsListing .listNews").each((i, el) => {
    const badge = $(el)
      .find("a span.premiumBadge span")
      .text()
      .replace(/^\s+|\s+$/gm, "");

    const headline = turndownService.turndown(
      $(el).find(".latestDetail p").html()
    );

    const link =
      VERCEL_BASE_URL +
      "/detailpost" +
      $(el).find(".imageLatest a").attr("href").replace(".html", "");

    const category = $(el).find(".dt-news").text();
    const title = $(el).find(".titleNews").text().trim();
    const premium_badge = badge === "" ? "not premium" : badge;
    const image = $(".imageLatest", el).find("img").attr("data-src");
    const pusblised_at = $(el).find(".latestDetail span.date").last().text();

    posts.push({
      link,
      title,
      image,
      headline,
      category,
      pusblised_at,
      premium_badge,
    });
  });

  return res.json({ status, featured_post, posts });
}
