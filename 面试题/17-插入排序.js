/*
  插入排序（抓扑克牌的排序）
  首先先抓一张牌，再抓第二张牌，第二张牌和抓到的牌由后到头进行比较，在遇到比它小的牌就插
  在这张牌的后面
   
*/
function insertSort(arr) {
  let array = [];
  array.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    for (let j = array.length - 1; j >= 0; j--) {
      if (array[j] <= arr[i]) {
        array.splice(j + 1, 0, arr[i]);
        break;
      }
      if (j === 0) {
        array.unshift(arr[i]);
      }
    }
  }
  console.log(array);

  return array;
}
insertSort([13, 8, 12, 1, 16, 0]);
