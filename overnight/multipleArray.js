function Check(a,b){
    if(a%b==0) return true
    return false
}
function multipleArray(a,b){
    const arr = [],result = []
    for(let i=a;i<=b ;i++){
        arr.push(i)
    }
    for(let i=0;i<arr.length;i++){
        for(let j=arr.length;j>=0;j--){
              if(Check(arr[i],arr[j])){
                  console.log(arr[i])
              }
        }
    }
    
}
multipleArray(10,20)