import runMiddleware from "../middleware/middleware";
import {
  cors,
  BASE_URL,
  BASE_URL_SLUG,
  ENCRYPTED_IMG,
  ERROR_MESSAGE,
  VERCEL_BASE_URL,
  turndownService,
  MARKDOWN,
} from "../utils/const";
import { puppeteerOpenBrowser } from "../utils/utils";

export default async function search(req, res) {
  await runMiddleware(req, res, cors);
  try {
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
      const title = $(el)
        .find(".gsc-thumbnail-inside a.gs-title")
        .text()
        .trim();
      const headline_dom = $(el)
        .find(".gsc-table-result .gs-bidi-start-align")
        .html();
      const link = $(el)
        .find(".gsc-thumbnail-inside a.gs-title")
        .attr("href")
        .replace(".html", "")
        .replace(BASE_URL, VERCEL_BASE_URL + "/detailpost/")
        .replace(BASE_URL_SLUG, VERCEL_BASE_URL + "/detailpost/");

      const headline = turndownService.turndown(headline_dom).trim();
      const image = $(el).find(".gs-image-box img.gs-image").attr("src");
      const premium_badge = image === ENCRYPTED_IMG ? "premium" : "not premium";

      return data.push({
        link,
        title,
        image,
        headline,
        premium_badge,
      });
    });

    //prettier-ignore
    if (parseInt(page) > 10) return res.status(404).json({ status: 404, error: ERROR_MESSAGE });

    return res.json({
      status: 200,
      important: MARKDOWN("headline"),
      data,
      pagination: {
        currentPage: page !== "" ? parseInt(page) : 1,
        totalPage: 10,
      },
    });
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
