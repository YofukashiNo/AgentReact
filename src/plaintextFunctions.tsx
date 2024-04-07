import { REACT_ERROR_CODES } from "./index";
export const _decodeError = (code, ...args): string =>
  `Code - ${code}; ${REACT_ERROR_CODES.get(`${code}`)?.replace(/%s/g, () => args.shift())}`;
