var pal;
var n;
for(n = 2; n < 1000; n++){
   if(isPrime(n)){
      if(isPalindrome(n)){
         pal = n;
      }
   }
}
console.log(pal);

function isPrime(n){
   for(var i = n-1; i > 1; i--){
      if(n % i == 0){
         return false;
      }
   }
   return true;
}

function isPalindrome(n){
   var reverse = 0;
   var digit;
   for(var num = n; num >= 1; num = Math.floor(num/10)){
      digit = num % 10;
      reverse = (reverse * 10) + digit;
   }
   if(n == reverse){
      return true;
   }
   else
      return false;
}
