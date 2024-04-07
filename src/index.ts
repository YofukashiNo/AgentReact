import { Logger } from "replugged";

export const PluginLogger = Logger.plugin("AgentReact", "#b380ff");

export const REACT_ERROR_CODES = new Map<string, string>();

import Utils from "./lib/utils";

export const start = (): void => {
  void Utils.loadReactErrorDB();
};

export { _decodeError } from "./plaintextFunctions";
