
/**
 *
 * @export
 * @type JSONValue
 */
export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

/**
 *
 * @export
 * @type TokenGetter
 */
export type TokenGetter = (forceRefresh: boolean) => Promise<string>
