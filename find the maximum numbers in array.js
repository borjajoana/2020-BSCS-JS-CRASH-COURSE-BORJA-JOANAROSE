
var arr = [90, 78, 5, 45, 34, 21, 12, 23, 76, 89];
var max =[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
        max = arr[i];
        console.log('array max to ' + max);
    }
}

console.log(max);

