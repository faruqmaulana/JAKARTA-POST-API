const TurndownService = require("turndown");
export const turndownService = new TurndownService();
export const axios = require("axios");
export const cheerio = require("cheerio");
export const Cors = require("cors");
export const cors = Cors({
  methods: ["POST"],
});
export const BASE_URL = "https://www.thejakartapost.com/";
export const BASE_URL_SLUG = "http://www.thejakartapost.com";
export const SUBSCRIBE_V1 = "\n\nStarting from IDR 55,000/month";
export const SUBSCRIBE_V2 =
  "\n\nStarting from IDR 55,000/month\n\nOr let Google manage your subscription";
