export default class Eventhub {
  private cache: { [key: string]: Array<(data: unknown) => void> } = {}
  on(eventName: string, fn: (data?: unknown) => void) {
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }
  emit(eventName: string, args?: unknown) {
    (this.cache[eventName] || []).forEach(fn =>
      fn(args)
    );
  }
  off(eventName: string, fn: (data?: unknown) => void) {
    let index = indexOf(this.cache[eventName], fn)
    if (index >= 0) {
      this.cache[eventName].splice(index, 1)
    }
  }
}

/***
 * helper indexOf兼容
 */
function indexOf(arr: Array<(data: unknown) => void>, item: () => void) {
  let index = -1
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      index = i
      break
    }
  }
  return index
}