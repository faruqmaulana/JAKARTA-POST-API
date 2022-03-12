import { axios, cheerio, BASE_URL } from "./const";
import { Agent } from "https";
const agent = new Agent({ rejectUnauthorized: false });
export const scrapeSite = async (endpoint) => {
  try {
    const fetchSite = await axios.get(`${BASE_URL}${endpoint}`, {
      httpsAgent: agent,
    });
    const html = await fetchSite.data;
    const status = fetchSite.status;
    const $ = cheerio.load(html);
    return { $, status };
  } catch (e) {
    return Promise.reject(e);
  }
};
