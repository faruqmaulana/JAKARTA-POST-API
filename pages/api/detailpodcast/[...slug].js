import {
  cors,
  PODCAST_CONTENT,
  SUBSCRIBE_V1,
  SUBSCRIBE_V2,
  turndownService,
} from "../utils/const";
import { scrapeSite } from "../utils/utils";
import runMiddleware from "../middleware/middleware";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

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

  const title = $("h1.title-large").text().trim();
  const image = $('meta[property="og:image"]').attr("content");
  const audio = $("audio").attr("src");
  return res.json({
    status,
    important:
      "detail_podcast return markdown, you should use plugin like markdown-it, react-markdown, and etc",
    detail_podcast: {
      date,
      title,
      image,
      audio,
      post_content,
    },
  });
}
