//do the bubble sort for this array
// it is o(n^2)
let theBubbleSort = (arr)=>{
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

console.log(theBubbleSort([1,-1,-6,2,0,3]));

