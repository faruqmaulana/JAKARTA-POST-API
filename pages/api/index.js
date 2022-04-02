export default function index(req, res) {
  return res.json({
    message: "Selamat Datang di JAKARTA POST API",
    "projects source": "https://github.com/faruqmaulana/JAKARTA-POST-API",
    "dokumentasi API":
      "https://github.com/faruqmaulana/JAKARTA-POST-API/blob/master/README.md",
    "mulai project anda dan jadilah produktif":
      "https://jakpost.vercel.app/api/category",
  });
}
