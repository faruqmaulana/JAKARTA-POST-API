import { ERROR_MESSAGE } from "./utils/const";

export default function index(req, res) {
  try {
    return res.json({
      message: "Selamat Datang di JAKARTA POST API",
      "projects source": "https://github.com/faruqmaulana/JAKARTA-POST-API",
      exampleResponse: {
        category: [
          {
            getCategory: "https://jakpost.vercel.app/api/category",
            getMoreCategory:
              "https://jakpost.vercel.app/api/category/indonesia",
          },
        ],
        harian: [
          "http://apicovid19indonesia-v2.vercel.app/api/indonesia/harian",
        ],
        provinsi: [
          "http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi",
          "http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/alt",
          "http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more",
          "http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/harian",
        ],
        csv: {
          kumulatif: [
            "http://apicovid19indonesia-v2.vercel.app/api/indonesia/csv",
          ],
          harian: [
            "http://apicovid19indonesia-v2.vercel.app/api/indonesia/csv/harian",
          ],
          provinsi: [
            "http://apicovid19indonesia-v2.vercel.app/api/indonesia/csv/provinsi",
            "http://apicovid19indonesia-v2.vercel.app/api/indonesia/csv/provinsi/alt",
          ],
        },
      },
    });
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
