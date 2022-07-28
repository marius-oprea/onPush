// memoization method
export function memoizee(func: any) {
  const results: any = {};
  return (...args: any) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

// @memoize custom decorator
export function memoize() {
  return function(target: any, key: any, descriptor: any) {
    const oldFunction = descriptor.value;
    const newFunction: any = memoizee(oldFunction)
    descriptor.value = function () {
        return newFunction.apply(this, arguments)
    }
  }
}
