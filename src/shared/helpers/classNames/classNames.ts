
type Mods = Record<string, string | boolean>;

export function classNames(
  cls: string, 
  mods: Mods = {}, 
  additionalClasses: string[] = []
): string {
  return [
    cls,
    ...additionalClasses.filter(Boolean),
    ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className)
  ].join(' ')
}
