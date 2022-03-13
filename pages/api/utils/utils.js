import { BASE_URL } from "./const";
import puppeteer from "puppeteer";
import cheerio from "cheerio";
import axios from "axios";
export const scrapeSite = async (endpoint) => {
  try {
    const fetchSite = await axios.get(`${BASE_URL}${endpoint}`);
    const html = await fetchSite.data;
    const status = fetchSite.status;
    const $ = cheerio.load(html);
    return { $, status };
  } catch (e) {
    return Promise.reject(e);
  }
};

export const puppeteerOpenBrowser = async (endpoint) => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}${endpoint}`, { waitUntil: "load" });
  const content = await page.content();
  const $ = cheerio.load(content);
  browser.close();
  return { $ };
};
