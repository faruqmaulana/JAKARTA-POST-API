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

    const author = $("span.writerName").text().trim();
    const location = $("div.post-like span.posting")
      .clone() //clone the element
      .children() //select all the children
      .remove() //remove all the children
      .end() //again go back to selected element
      .text()
      .replace(/●/g, "")
      .trim();
    const pusblised_at = $("div.post-like span.day").text();
    const title = $(".title-large").text().trim();
    const image = $(".main-single img").attr("data-src");
    const image_source = $(".main-single span.created:first")
      .text()
      .trim()
      .replace(/  /, " ");
    const content = $.html(".main-single p");
    const markdown = turndownService
      .turndown(content)
      .replace(SUBSCRIBE_V1, "")
      .replace(SUBSCRIBE_V2, "");
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
