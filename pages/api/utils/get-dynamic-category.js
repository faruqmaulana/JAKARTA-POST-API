import { scrapeSite } from "./utils";
import { turndownService, BASE_URL, VERCEL_BASE_URL, MARKDOWN } from "./const";

export const getDynamicCategory = async (endpoint) => {
  const { $, status } = await scrapeSite(endpoint);
  if (endpoint === "hashtag/Commentary" || endpoint === "most-viewed") {
    const posts = [];
    $(".bgSingle .listNews").each((i, el) => {
      const getLink = $(el)
        .find(".imageNews")
        .find("a")
        .attr("href")
        .replace(".html", "");

      const link =
        endpoint === "hashtag/Commentary"
          ? getLink.replace(BASE_URL, VERCEL_BASE_URL + "/detailpost/")
          : VERCEL_BASE_URL + "/detailpost/" + getLink;

      const pusblised_at = $(el)
        .find("span.date")
        .clone()
        .children()
        .remove()
        .end()
        .text()
        .trim();

      const category = $(el).find("span span").text();
      const title = $(el)
        .find(".titleNews")
        .clone()
        .children()
        .remove()
        .end()
        .text()
        .trim();

      const image = $(el).find(".imageNews").find("img").attr("data-src");

      posts.push({
        link,
        title,
        image,
        category,
        pusblised_at,
      });
    });

    return { status, featured_post: null, posts, pagination: null };
  } else {
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

    const currentPage = $("span.currentPagi input").attr("value");
    const totalPage = $("span.currentPagi input").attr("max");
    const pagination = {
      currentPage: parseInt(currentPage),
      totalPage: parseInt(totalPage),
    };

    const posts = [];
    $(".tjp-newsListing .listNews").each((i, el) => {
      const title = $(el)
        .find(".titleNews")
        .text()
        .trim()
        .replace(/\u200B/g, "");

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

    return {
      status,
      important: MARKDOWN("headline"),
      featured_post,
      posts,
      pagination,
    };
  }
};
