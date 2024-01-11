let count=0;
let arr=[1,2,5,4,9,5,8,5,7];
for(let i=0;i<arr.length;i++)
{
    for(let j=1;j<arr.length;j++)
    {
        if(arr[i]=arr[j])
        {
            count=count+1;
        }
    }
}
console.log(count);
