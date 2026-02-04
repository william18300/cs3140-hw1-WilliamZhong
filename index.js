// Homework 1: JavaScript Fundamentals
// Name: William Zhong
// Date 2/4/2006

// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];

function sum(arr){
    let total = 0;
    for(let i = 0; i < arr.length ; i++){
        total += arr[i];
    }

    return total;

}

function average(arr){
    let total = sum(arr);
    return total/arr.length;

}

function min(arr) {
    return Math.min(...arr); 
}

function max(arr){
    return Math.max(...arr)
}

