function Quicksort(array)
{
    if (array.length <= 1) {
        return array;
      }
    
      let pivot = array[0];
      let leftArr = [];
      let rightArr = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            leftArr.push(array[i]);
        }
        else
        {
            rightArr.push(array[i])
        }
        
    }

    const result = [...Quicksort(leftArr),pivot,...Quicksort(rightArr)]
   
     return result;

}
let array = [22,4,1,7]
console.log(Quicksort(array))