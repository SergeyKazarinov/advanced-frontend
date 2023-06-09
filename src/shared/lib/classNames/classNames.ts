type TMods = Record<string, boolean | string>

export const classNames = (cls: string, mods?:TMods, additional?: string[]): string => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([key, value]) => Boolean(value))
    .map(([key, value]) => key),
].join(' ');
