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

function memorize(fn, limit) {
  const memory = [];
  return (...args) => {
      const find = memory.find(elem => elem.args, args);
      if (find) {
        return find.result;
      }
      const res = fn(...args);
      memory.push({args: args, result: res}); 
      if (memory.length > limit){
        memory.shift();
      }    
      return res;
  }
}