function calculate(n){
    var sum = 0;
    for(var i = 0; i < n; ++i){
        sum += i;
    }
    return sum;
}
var startTime = new Date().getTime();
var a = calculate(1000000 / 2);
console.log(a);
var b = calculate(1000000 / 2);
console.log(b);
var endTime = new Date().getTime();
console.log((endTime - startTime) / 1000);
console.log("I am back");
