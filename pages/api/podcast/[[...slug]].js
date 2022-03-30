import { checkEmptyObj, scrapeSite } from "../utils/utils";
import runMiddleware from "../middleware/middleware";
import { cors, BASE_URL, VERCEL_BASE_URL, ERROR_MESSAGE } from "../utils/const";

export default async function handler(req, res) {
  runMiddleware(req, res, cors);

  try {
    //get query params
    const { slug } = req.query;
    const url = checkEmptyObj(req.query) === false ? slug.join("/") : "";

    // make request
    const { $, status } = await scrapeSite("multimedia/podcast/" + url);

    const link = $(".boxPodcast a")
      .attr("href")
      .replace(BASE_URL, VERCEL_BASE_URL + "/detailpodcast/")
      .replace(".html", "");

    const published_at = $(".boxPodcast span.date")
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
      duration,
      published_at,
    };

    const podcast = [];
    $(".columns .boxPodcast").each((i, el) => {
      const published_at = $(el)
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
        duration,
        published_at,
      });
    });

    const currentPage = $(".navigation-page a.jp-current").text();
    const totalPage = $(".navigation-page a.jp-number").last().text();
    const pagination = {
      currentPage: parseInt(currentPage),
      totalPage: parseInt(totalPage),
    };

    podcast.splice(0, 1);

    return res.json({ status, featured_podcast, podcast, pagination });
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
