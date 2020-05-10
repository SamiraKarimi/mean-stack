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

////binary search with recursion 
const binaryF = (arr,n,start=0,end=arr.length-1)=>{
    let mid = Math.floor(((end-start)+end)/2)
    if ((end-start) == 0) return ` the value doesnt exist :${false}`;
    if(arr[mid] === n) return `the value exist and index number is ${mid}`;
    else if(arr[mid]>n)
      return binaryF(arr,n,start,mid-1)
    else if(arr[mid]<n)
      return binaryF(arr,n,mid+1,end)
}

console.log(binaryF([-6,-4,-1,0,1,2,5],2))

