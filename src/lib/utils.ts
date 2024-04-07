import { ERROR_RECORD_URL } from "./consts";
import { PluginLogger, REACT_ERROR_CODES } from "../index";
export const loadReactErrorDB = async (): Promise<void> => {
  const fetchStart = performance.now();
  const REACT_ERRORS_RESPONSE = await fetch(ERROR_RECORD_URL);
  const REACT_ERRORS_RESPONSE_JSON = await REACT_ERRORS_RESPONSE.json();
  for (const REACT_ERRORS_CODE in REACT_ERRORS_RESPONSE_JSON)
    REACT_ERROR_CODES.set(REACT_ERRORS_CODE, REACT_ERRORS_RESPONSE_JSON[REACT_ERRORS_CODE]);
  const fetchEnd = performance.now();
  PluginLogger.log(`Loaded React Error Database in ${(fetchEnd - fetchStart).toFixed(2)}ms.`);
};
export default { loadReactErrorDB };
