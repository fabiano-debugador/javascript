var arr = ['a', 'b', 'c'];
var eArr = arr.entries();
console.log(eArr.next())
console.log(eArr.next())
for (let e of eArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']