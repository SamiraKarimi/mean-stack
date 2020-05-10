//binary search without recursion
let binaryF = (arr,x)=>{
    let start=0, end= arr.length-1;
    while (start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid]===x) {
            return `the value of ${x} is exist and the index is ${mid}`;
        }
        else if(arr[mid]<x) 
                start = mid+1;
        else    
                end = mid-1;
    }
    return false;
}



console.log(binaryF([-6,-4,-1,0,1,2,5],2))
