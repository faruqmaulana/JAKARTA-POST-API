import {
  cors,
  MARKDOWN,
  SUBSCRIBE_V1,
  SUBSCRIBE_V2,
  ERROR_MESSAGE,
  turndownService,
} from "../utils/const";
import { scrapeSite } from "../utils/utils";
import runMiddleware from "../middleware/middleware";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  try {
    const { slug } = req.query;
    const url = slug.join("/") + ".html";
    const { $, status } = await scrapeSite(url);

    const content = $.html(".main-single p");
    const post_content = turndownService
      .turndown(content)
      .trim()
      .replace(SUBSCRIBE_V1, "")
      .replace(SUBSCRIBE_V2, "");
    const location = $("div.post-like span.posting")
      .clone()
      .children()
      .remove()
      .end()
      .text()
      .replace(/●/g, "")
      .trim();
    const image_desc = $(".main-single span.created:first")
      .text()
      .trim()
      .replace(/  /, " ");

    const title = $(".title-large").text().trim();
    const author = $("span.writerName").text().trim();
    const pusblised_at = $("div.post-like span.day").text();
    const image = $('meta[property="og:image"]').attr("content");

    return res.json({
      status,
      important: MARKDOWN("post_content"),
      detail_post: {
        title,
        image,
        author,
        location,
        image_desc,
        post_content,
        pusblised_at,
      },
    });
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
