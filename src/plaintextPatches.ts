import Types from "./types";
export default [
  {
    find: "error-decoder",
    replacements: [
      {
        match: /function \w+\(\w+\){for\(var \w+="https:\/\/reactjs\.org.{100,150}return/,
        replace: (prefix) =>
          `${prefix} replugged.plugins.getExports("dev.tharki.AgentReact")._decodeError(...arguments)??`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
