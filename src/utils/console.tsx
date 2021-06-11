/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const tron = {
  error: (data): any => console.tron && console.tron.error(data),
  warn: (data): any => console.tron && console.tron.warn(data),
  log: (data): any => console.tron && console.tron.log(data),
};
