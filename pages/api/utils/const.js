//export library
export const Cors = require("cors");
const TurndownService = require("turndown");
export const turndownService = new TurndownService();
export const cors = Cors({
  methods: ["POST"],
});

// export const
export const message = "gagal mengambil data";
export const BASE_URL = "https://www.thejakartapost.com/";
export const BASE_URL_SLUG = "http://www.thejakartapost.com";
export const SUBSCRIBE_V1 = "\n\nStarting from IDR 55,000/month";
export const CATEGORY = "https://jakpost.vercel.app/api";
export const DETAIL_POST = "https://jakpost.vercel.app/api/detailpost/";
export const SUBSCRIBE_V2 =
  "\n\nStarting from IDR 55,000/month\n\nOr let Google manage your subscription";
export const ENCRYPTED_IMG =
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShpqiBCpiQKcz9fhdV8GSJ3SjXwcMvujfIUVgZIZEfdki7_ctlIpreP4mh";