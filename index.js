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

// ============ PART 2: STRING FUNCTIONS ============

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str){
    return str.split("").reverse().join("");
}

function countVowels(str){
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;

}

// ============ PART 3: OBJECT ============

const student = {
    name: "William Zhong",
    age: 20,
    grades: [85,92,78,90,88],

    getAverage: function(){
        let avg = average(this.grades);
        return avg;
    },
    isHonorRoll: function(){
        let avg = this.getAverage();

        if(avg > 85){
            return true;
        }else{
         return false;
        }
    },
};

// ============ TEST YOUR CODE ============
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello"));
console.log("reverse('hello'):", reverse("hello"));
console.log("countVowels('hello'):", countVowels("hello"));

console.log("\n=== Part 3: Object ===");
console.log("Student:", student.name);
console.log("Grades:", student.grades);
console.log("Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());