import runMiddleware from "../middleware/middleware";
import {
  cors,
  BASE_URL,
  DETAIL_POST,
  BASE_URL_SLUG,
  ENCRYPTED_IMG,
  turndownService,
} from "../utils/const";
import { puppeteerOpenBrowser } from "../utils/utils";

export default async function search(req, res) {
  await runMiddleware(req, res, cors);

  //get query params
  const { search } = req.query;
  const query = search[0];
  const sortby = search[1] !== "relevance" ? search[1] : "";
  const page = search[2] !== undefined ? search[2] : "";

  //make request
  const { $ } = await puppeteerOpenBrowser(
    `search?q=${query}#gsc.tab=0&gsc.q=${query}&gsc.sort=${sortby}&gsc.page=${page}`
  );

  const data = [];
  $(".gsc-expansionArea .gsc-webResult").each((i, el) => {
    const title = $(el).find(".gsc-thumbnail-inside a.gs-title").text().trim();
    const image = $(el).find(".gs-image-box img.gs-image").attr("src");
    const link =
      DETAIL_POST +
      $(el)
        .find(".gsc-thumbnail-inside a.gs-title")
        .attr("href")
        .replace(".html", "")
        .replace(BASE_URL, "")
        .replace(BASE_URL_SLUG, "");
    const headline_dom = $(el)
      .find(".gsc-table-result .gs-bidi-start-align")
      .html();
    const headline = turndownService.turndown(headline_dom).trim();
    const premium_badge = image === ENCRYPTED_IMG ? "premium" : "not premium";

    return data.push({
      link,
      title,
      image,
      headline,
      premium_badge,
    });
  });

  return res.json({ status: 200, data });
}
