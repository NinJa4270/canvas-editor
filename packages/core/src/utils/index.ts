export function merge(a: any, b: any) {
  const result: any = {}
  Object.keys(a).forEach(key => {
    const value = a[key]
    if (typeof value === 'object' && value !== null && !(value instanceof Node)) {
      result[key] = merge(value, b[key])
    } else {
      if (value || value === 0) {
        result[key] = value
      } else {
        result[key] = b[key]
      }
    }
  })
  return result
}
