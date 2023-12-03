import { Logger } from "replugged";
import { ERROR_RECORD_URL } from "./lib/consts";
export const PluginLogger = Logger.plugin("AgentReact");
const REACT_ERRORS_RESPONSE = await fetch(ERROR_RECORD_URL);
export const ERROR_CODES = await REACT_ERRORS_RESPONSE.json();
PluginLogger.log("Loaded React Error Database.");

export { _decodeError } from "./plaintextFunctions";
