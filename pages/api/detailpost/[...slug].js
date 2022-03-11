import runMiddleware from "../middleware/middleware";
import {
  cors,
  axios,
  cheerio,
  BASE_URL,
  SUBSCRIBE_V1,
  SUBSCRIBE_V2,
  turndownService,
} from "../utils/utils";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { slug } = req.query;

  let result = axios.get(BASE_URL + slug.join("/") + ".html").then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    const location = $("div.post-like span.posting")
      .clone()
      .children()
      .remove()
      .end()
      .text()
      .replace(/●/g, "")
      .trim();
    const image_source = $(".main-single span.created:first")
      .text()
      .trim()
      .replace(/  /, " ");
    const content = $.html(".main-single p");
    const markdown = turndownService
      .turndown(content)
      .trim()
      .replace(SUBSCRIBE_V1, "")
      .replace(SUBSCRIBE_V2, "");
    const image = $(".main-single .row img").attr("data-src");
    const title = $(".title-large").text().trim();
    const author = $("span.writerName").text().trim();
    const pusblised_at = $("div.post-like span.day").text();

    console.log(image);
    return [
      {
        message: "succes",
        desclaimer:
          "the post content return markdown, you should use plugin like markdown-it, react-markdown, and etc",
        result: {
          author,
          location,
          pusblised_at,
          title,
          image,
          image_source,
          post_content: markdown,
        },
      },
    ];
  });

  return res.json(await result);
}
