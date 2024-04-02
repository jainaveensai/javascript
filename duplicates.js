function duplicates(params) {
    let res=params.sort()
    console.log('res', res);
   return res.filter((item, index)=>{
    console.log('item',  index, res.indexOf(item));
                  return res.indexOf(item) === index
   })
}
console.log('duplicates', duplicates([5,1,1,2,2,3,3,4,4,5]))