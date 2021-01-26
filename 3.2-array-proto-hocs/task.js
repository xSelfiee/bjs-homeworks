function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}
function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}
function compareArrays( arr1, arr2 ) {
    return arr1.length === arr2.length && arr1.every((x, i) => x === arr2[i]);
}
compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true

function memorize(fn, limit) {
  const memory = [];
  return function someFunc() {
      const args = Array.from(arguments);
      let res = find(args, memory);
      if (res != undefined)
      return res;

      res = fn.apply(null, arguments);
      if (memory.length > limit){
        memory.shift();
        memory.push({args: args, result: res});
      }
      else memory.push({args: args, result: res}); 
        
      return res;
  }
}
function find(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++)
  if (compareArrays(arr1, arr2[i].args) === true)
  return arr2[i].result;
}