import { ERROR_MESSAGE } from "./utils/const";
import petaSensus from '../../peta_sensus.json'

export default function index(req, res) {
  try {
    return res.json(petaSensus);
  } catch {
    res.status(404).json({ status: 404, error: ERROR_MESSAGE });
  }
}
