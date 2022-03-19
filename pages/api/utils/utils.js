import { BASE_URL } from "./const";
import puppeteer from "puppeteer";
import cheerio from "cheerio";
import axios from "axios";
import chrome from "chrome-aws-lambda";
// const chromium = require("chrome-aws-lambda");

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
    args: chrome.args,
    executablePath: await chrome.executablePath,
  });

  const page = await browser.newPage();
  await page.goto(`${BASE_URL}${endpoint}`, { waitUntil: "load", timeout: 0 });
  const content = await page.content();
  const $ = cheerio.load(content);
  await browser.close();
  return { $ };
};

export function checkEmptyObj(obj) {
  for (var i in obj) return false;
  return true;
}

// let browserWSEndpoint;

// export const puppeteerOpenBrowser = async function (event) {
//   let browser, page;

//   try {
//     if (browserWSEndpoint) {
//       browser = await chromium.puppeteer.connect({ browserWSEndpoint });
//     }

//     if (!browser || !browser.isConnected()) {
//       browser = await chromium.puppeteer.launch({
//         args: chromium.args,
//         defaultViewport: chromium.defaultViewport,
//         executablePath: await chromium.executablePath,
//         headless: chromium.headless,
//       });

//       // Keep blank page open
//       browser.newPage();
//       await page.goto(`${BASE_URL}${endpoint}`, {
//         waitUntil: "load",
//         timeout: 0,
//       });
//       const content = await page.content();
//       const $ = cheerio.load(content);
//       browserWSEndpoint = browser.wsEndpoint();
//     }

//     page = browser.newPage();
//     // ...
//   } finally {
//     if (page) page.close();
//     if (browser) browser.disconnect();
//     return { $ };
//   }
// };
