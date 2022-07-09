let num = Number(prompt('Enter the number of element'))
let arr=[];
for(let i =0;i<num;i++){
    let n= Number(prompt('Enter ${i} element'))
    arr.push(n);
}
console.log(arr);
let sum =0;
for(let j = 0;j<arr.length;j++){
    if(arr[j] >0 && arr[j]%2==0 && arr[j]%3 ==0 ){
        sum +=arr[j];
    }
}
console.log(sum);