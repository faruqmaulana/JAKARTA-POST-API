//export library
export const Cors = require("cors");
const TurndownService = require("turndown");
export const turndownService = new TurndownService();
export const cors = Cors({
  methods: ["POST"],
});
// export const
export const message = "gagal mengambil data";
export const ERROR_MESSAGE = "path not found dude";
export const BASE_URL = "https://www.thejakartapost.com/";
export const BASE_URL_SLUG = "http://www.thejakartapost.com";
export const VERCEL_BASE_URL = "https://jakpost.vercel.app/api";
export const HASTAG_COMMENTARY = "hashtag/Commentary?hashtag/Commentary";
export const SUBSCRIBE_V1 = "\n\nStarting from IDR 55,000/month";
export const SUBSCRIBE_V2 =
  "\n\nStarting from IDR 55,000/month\n\nOr let Google manage your subscription";
export const MARKDOWN = (desc) =>
  `${desc} return markdown, you should use markdown parser like react-markdown, markdown-it, markedjs and etc`;
export const ENCRYPTED_IMG =
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShpqiBCpiQKcz9fhdV8GSJ3SjXwcMvujfIUVgZIZEfdki7_ctlIpreP4mh";
export const PODCAST_CONTENT =
  " A podcast from Asia Institute of the University of Melbourne. Produced and edited by profactual.com. Music by audionautix.com.";
