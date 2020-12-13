import { capitalize } from "lodash-es";
export default (x: number, y: number): string => {
  return `${capitalize("sum")} = ${x + y}`;
};

