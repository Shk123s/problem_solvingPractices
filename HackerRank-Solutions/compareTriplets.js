function compareTriplets(a, b) {
    let alice=0;
  let  bob=0 ;
  let result ;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if ( a[i] < b[i]) {
      bob++;
    } else if (b[i] === a[i]) {
      bob,alice;
    }
  }
  // console.log(alice , bob);
 console.log(  result= [alice,bob]);
  return  [alice,bob]
}
const a =  [5, 6, 7] 
const b =  [3, 6, 10]
compareTriplets(a,b);
