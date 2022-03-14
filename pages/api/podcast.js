import runMiddleware from "./middleware/middleware";
import { cors, BASE_URL, VERCEL_BASE_URL } from "./utils/const";
import { scrapeSite } from "./utils/utils";

export default async function (req, res) {
  runMiddleware(req, res, cors);

  // make request
  const { $, status } = await scrapeSite("multimedia/podcast");

  const link = $(".boxPodcast a")
    .attr("href")
    .replace(BASE_URL, VERCEL_BASE_URL + "/detailpodcast/")
    .replace(".html", "");

  const date = $(".boxPodcast span.date")
    .first()
    .clone()
    .children()
    .remove()
    .end()
    .text()
    .trim();

  const image = $(".boxPodcast img").first().attr("data-src");
  const title = $(".boxPodcast h5.titleHlg").first().text().trim();
  const duration = $(".boxPodcast span.timepod").first().text().trim();

  const featured_podcast = {
    link,
    title,
    image,
    date,
    duration,
  };

  const podcast = [];
  $(".columns .boxPodcast").each((i, el) => {
    const date = $(el)
      .find("span.date")
      .clone()
      .children()
      .remove()
      .end()
      .text()
      .trim();

    const link = $(el)
      .find("a")
      .attr("href")
      .replace(BASE_URL, VERCEL_BASE_URL + "/detailpodcast/")
      .replace(".html", "");

    const image = $(el).find("img").attr("data-src");
    const title = $(el).find("h5.titleHlg").text().trim();
    const duration = $(el).find("span.timepod").text().trim();

    return podcast.push({
      link,
      title,
      image,
      date,
      duration,
    });
  });

  podcast.splice(0, 1);

  return res.json({ status, featured_podcast, podcast });
}
