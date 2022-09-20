import runMiddleware from "../middleware/middleware";
import { getDynamicCategory } from "../utils/get-dynamic-category";
import { cors, ERROR_MESSAGE, HASTAG_COMMENTARY } from "../utils/const";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  try {
    //get query params
    const { slug } = req.query;

    // get url request
    const query = slug.length !== 2 ? slug.splice(2).join("=") : slug.join("/");
    const getRequestUrl = slug.join("/") + "?" + query;
    const REQUEST_URL =
      getRequestUrl === "most-viewed?"
        ? getRequestUrl.replace("?", "")
        : getRequestUrl === HASTAG_COMMENTARY
          ? getRequestUrl.replace(HASTAG_COMMENTARY, "hashtag/Commentary")
          : getRequestUrl;

    //make request
    const { status, important, featured_post, posts, pagination } =
      await getDynamicCategory(REQUEST_URL);

    return res.json({
      status,
      important,
      featured_post,
      posts,
      pagination: slug.length === 1 ? null : pagination,
    });
  } catch (e) {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
