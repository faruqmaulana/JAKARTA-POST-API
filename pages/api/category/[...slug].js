import middleware from "../middleware/middleware";
import { getDynamicCategory } from "../utils/get-dynamic-category";
import { cors, ERROR_MESSAGE } from "../utils/const";

export default async function handler(req, res) {
  await middleware(req, res, cors);

  try {
    //get query params
    const { slug } = req.query;

    // wrong logic
    const query = slug.length !== 2 ? slug.splice(2).join("=") : slug.join("/");
    const REQUEST_URL = slug.join("/") + "?" + query;

    //make request
    const { status, featured_post, posts, pagination } =
      await getDynamicCategory(REQUEST_URL);

    return res.json({
      status,
      featured_post,
      posts,
      pagination: slug.length === 1 ? null : pagination,
    });
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
