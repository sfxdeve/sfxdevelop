export const normalizePath = (value: string) =>
  value === "/" ? "/" : value.endsWith("/") ? value : `${value}/`;
