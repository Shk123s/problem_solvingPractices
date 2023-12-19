function marsExploration(s) {
    let count = 0;
    let arr = s.split("");
    console.log(arr);
    for (let i = 0; i < arr.length-2; i=i+3) {
       if (arr[i] != "S" ) {
         count++
       }
       if (arr[i+1] != "O" ) {
        count++
      }
      if (arr[i+2] != "S" ) {
        count++
      }
        
    }
    console.log(count);

}
s = "SOSSOT"
marsExploration(s);