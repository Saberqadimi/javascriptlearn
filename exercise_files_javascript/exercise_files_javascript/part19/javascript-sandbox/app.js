const products = [
  {name:'ipad',category:'devices'},
  {name:'LG',category:'TV'},
  {name:'iphone',category:'phones'},
  {name:'Super Vision',category:'TV'},
];


const result = products.find(function(product){
  return product.category == 'TV'
});

console.log(result)