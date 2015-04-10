var sum = 0;
for(var n = 2, i = 0; i < 1000; n++){
   if(isPrime(n)){
         sum += n;
         i++;
   }
}
console.log(sum);

function isPrime(n){
   for(var i = n-1; i > 1; i--){
      if(n % i == 0){
         return false;
      }
   }
   return true;
}
