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

  Object.keys(b).forEach(key => {
    if (!(key in result)) {
      result[key] = b[key]
    }
  })

  return result
}

export function debounce(fn: (...args: any) => any, timer: number) {
  let t: number
  return function (this: any, ...args: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this
    clearTimeout(t)
    t = setTimeout(() => {
      fn.apply(_this, args)
    }, timer)
  }
}
