export type TMods = Record<string, boolean | string | undefined>

export const classNames = (
  cls: string,
  mods: TMods = {},
  additional: (string | undefined)[] = [],
): string => {
  const newAdditional = additional ? additional.filter(Boolean) : [];
  const newMods = mods
    ? Object.entries(mods).filter(([key, value]) => Boolean(value)).map(([key, value]) => key)
    : [];

  return [
    cls,
    ...newMods,
    ...newAdditional,
  ].join(' ');
};
