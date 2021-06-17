var a = function(array,n){
   if(array ==null)
   return void 0;
   if(n==null)
   return array [0];
   if(n<0)
   return [];
   return array.slice(0,n);
};
console.log(a([7, 9, 0, -2]));
console.log(a([],3));
console.log(a([7, 9, 0, -2],3));
console.log(a([7, 9, 0, -2],6));
console.log(a([7, 9, 0, -2],-3));