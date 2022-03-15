import { BASE_URL, VERCEL_BASE_URL } from "./const";
import { scrapeSite } from "./utils";

export const getDynamicCategory = async (endpoint) => {
  const { $, status } = await scrapeSite(endpoint);
  const posts = [];
  $(".bgSingle .listNews").each((i, el) => {
    const getLink = $(el)
      .find(".imageNews")
      .find("a")
      .attr("href")
      .replace(".html", "");

    const link =
      endpoint === "hashtag/Commentary"
        ? getLink.replace(BASE_URL, `${VERCEL_BASE_URL}/detailpost/`)
        : `${VERCEL_BASE_URL}/detailpost/${getLink}`;

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

  return { status, posts };
};
