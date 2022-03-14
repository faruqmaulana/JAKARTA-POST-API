import {
  cors,
  SUBSCRIBE_V1,
  SUBSCRIBE_V2,
  turndownService,
} from "../utils/const";
import { scrapeSite } from "../utils/utils";
import runMiddleware from "../middleware/middleware";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { slug } = req.query;
  const url = slug.join("/") + ".html";
  const { $, status } = await scrapeSite(url);

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

  const content = $.html(".main-single p");
  const post_content = turndownService
    .turndown(content)
    .trim()
    .replace(SUBSCRIBE_V1, "")
    .replace(SUBSCRIBE_V2, "");

  const title = $(".title-large").text().trim();
  const author = $("span.writerName").text().trim();
  const image = $('meta[property="og:image"]').attr("content");
  const pusblised_at = $("div.post-like span.day").text();

  return res.json({
    status,
    important:
      "post_content return markdown, you should use plugin like markdown-it, react-markdown, and etc",
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
}
