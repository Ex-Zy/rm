/* eslint-disable @typescript-eslint/no-explicit-any */
export const deepClone = <T>(target: T): T => {
  if (target === null) {
    return target
  }
  if (target instanceof Date) {
    return new Date(target.getTime()) as any
  }
  if (target instanceof Array) {
    const cp = [] as any[]
    ;(target as any[]).forEach((v) => cp.push(v))
    return cp.map((n: any) => deepClone<any>(n)) as any
  }
  if (typeof target === 'object') {
    const cp = { ...(target as Record<string, any>) } as Record<string, any>
    Object.keys(cp).forEach((k) => (cp[k] = deepClone<any>(cp[k])))
    return cp as T
  }
  return target
}
