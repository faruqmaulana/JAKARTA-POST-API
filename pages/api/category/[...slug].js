import middleware from "../middleware/middleware";
import { getDynamicCategory } from "../utils/get-dynamic-category";
import { cors, ERROR_MESSAGE } from "../utils/const";

export default async function handler(req, res) {
  await middleware(req, res, cors);

  try {
    //get query params
    const { slug } = req.query;
    if (slug.length > 2) slug.splice(2);
    const REQUEST_URL = slug.join("/");

    //make request
    const { status, featured_post, posts } = await getDynamicCategory(
      REQUEST_URL
    );

    return res.json({ status, featured_post, posts });
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
