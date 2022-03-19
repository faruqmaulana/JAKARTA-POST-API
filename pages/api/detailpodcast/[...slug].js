import {
  cors,
  MARKDOWN,
  ERROR_MESSAGE,
  PODCAST_CONTENT,
  turndownService,
} from "../utils/const";
import { scrapeSite } from "../utils/utils";
import runMiddleware from "../middleware/middleware";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  try {
    //get query params
    const { slug } = req.query;
    const url = slug.join("/") + ".html";

    //make request
    const { $, status } = await scrapeSite(url);

    const date = $(".post-like")
      .text()
      .replace(" /   ", "● ")
      .replace(/^\s+|\s+$/gm, "")
      .replace(/\n/g, " ");

    const content = $(".detailNews").html();
    const post_content = turndownService
      .turndown(content)
      .replace(PODCAST_CONTENT, "");

    const audio = $("audio").attr("src");
    const title = $("h1.title-large").text().trim();
    const image = $('meta[property="og:image"]').attr("content");

    return res.json({
      status,
      important: MARKDOWN("post_content"),
      detail_podcast: {
        date,
        title,
        image,
        audio,
        post_content,
      },
    });
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
