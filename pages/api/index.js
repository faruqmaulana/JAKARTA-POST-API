import { ERROR_MESSAGE } from "./utils/const";

export default function index(req, res) {
  try {
    return res.json({
      message: "Selamat Datang di JAKARTA POST API",
      "projects source": "https://github.com/faruqmaulana/JAKARTA-POST-API",
      "mulai project anda dan jadilah produktif":
        "https://jakpost.vercel.app/api/category",
    });
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
