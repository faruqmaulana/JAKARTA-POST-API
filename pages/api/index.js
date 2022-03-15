import { ERROR_MESSAGE } from "./utils/const";

export default function index(req, res) {
  try {
    return res.json({ name: "M. Faruq Maulana" });
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
