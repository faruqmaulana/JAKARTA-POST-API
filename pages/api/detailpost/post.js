import runMiddleware from "../middleware/middleware";
import { useRouter } from "next/router";

var TurndownService = require("turndown");
var turndownService = new TurndownService();
const axios = require("axios");
const cheerio = require("cheerio");
// const url =
//   "https://www.thejakartapost.com/world/2022/03/04/south-koreas-president-orders-protection-of-nuclear-power-plant-amid-wildfire.html";
const Cors = require("cors");
const cors = Cors({
  methods: ["POST"],
});

export default async function handler(request, response) {
  await runMiddleware(request, response, cors);
  const query = useRouter();

  console.log(query.country);

  let result = axios
    .get(
      "https://www.thejakartapost.com/indonesia/2022/03/06/" +
        query.slug +
        ".html"
    )
    .then((res) => {
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
      const image = $(".main-single").find("img").attr("src");
      const image_source = $(".main-single span.created:first")
        .text()
        .trim()
        .replace(/  /, " ");
      const content = $.html(".main-single p");
      const markdown = turndownService
        .turndown(content)
        .replace(
          "\n\nStarting from IDR 55,000/month\n\nOr let Google manage your subscription",
          ""
        );
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

  return response.json(await result);
}
