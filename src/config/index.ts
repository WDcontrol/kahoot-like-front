// More content in config.ts
const throwIfNot = <T, K extends keyof T>(obj: Partial<T>, prop: K): T[K] => {
  if (obj[prop] === undefined) {
    throw new Error(`Environment is missing variable ${prop}`);
  } else {
    return obj[prop] as T[K];
  }
};

// Validate that we have our expected ENV variables defined!
["REACT_APP_SOCKET_SERVER_URL"].forEach((v) => {
  throwIfNot(process.env, v);
});

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // all decalered as string to avoid undefined
      REACT_APP_SOCKET_SERVER_URL: string;
    }
  }
}

export const SOCKET_SERVER_URL: string =
  process.env.REACT_APP_SOCKET_SERVER_URL;
