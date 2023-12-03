import { ERROR_CODES } from "./index";
export const _decodeError = (code, ...args): string =>
  `Code - ${code}; ${ERROR_CODES?.[code]?.replace(/%s/g, () => args.shift())}`;
