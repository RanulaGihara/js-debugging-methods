//time check

console.time("check");

let total = 0;
for (let i = 0; i < 10000000; i++) {
  //The expression total += i is shorthand for total = total + i.
  total += i;
}

//explain the code below in detail 
const totalV2 = Array.from({ length: 10000000 }, (_, i) => i).reduce(
  (acc, curr) => acc + curr,
  0
);
console.log(totalV2); // Output: 49999995000000



console.log(total);
console.timeEnd("check");

//console warning
console.warn("This is a warning message");
