
const express = require('express')
const app = express()
const port = 3000
function bubbleSort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false; var tmp = array[i - 1]; array[i - 1] = array[i]; array[i] = tmp;
            }
        }
    } return array;
}
function removeDuplicate(arr) { const result = []; let idx = 0; const tmp = {}; for (let i = 0; i < arr.length; i++) { if (!tmp[arr[i]]) { tmp[arr[i]] = 1; result[idx] = arr[i]; idx++; } } return result; }
function swap(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]]; return arra;
}
function removeDuplicates_withEvenOdd(arr) {
    let unique_odd = []; let unique_even = []; let unique = []; for (i = 0; i < arr.length; i++) {
        let data = parseInt(arr[i])
        if (!isNaN(data)) {
            if (!unique.includes(data)) { unique.push(data); }
        }
    } for (i = 0; i < unique.length; i++) { if (unique[i] % 2 == 0) { unique_even.push(unique[i]); } else { unique_odd.push(unique[i]); } } return unique_odd.concat(unique_even);
}
function sortAlpha(word) {
    return word.split("").sort().join("");
}
function countBits(number) {        
    // log function in base 2   
    // take only integer part  
    return Math.floor(Math.log2(number)+1);  
  }  
  function diff_minutes(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
  
 }
  /*
 2.  Write a program to Find the smallest and second smallest element in an
array
  */ 
app.get('/Q2', (req, res) => {
    var arr = [5, 1, 9, 1, 3, 5, 7];
    arr = removeDuplicate(arr);
    arr = bubbleSort(arr);
    console.log(arr[0]);
    console.log(arr[1]);
    res.send("Smallest =>" + arr[0] + "\n  Smallest =>" + arr[1])
})
app.get('/Q3', (req, res) => {
    stringA1 = "this mb from icl";
    let arrayOfChar = Array.from(stringA1);
    res.send(arrayOfChar)
})
/**
 * 4. Find total Number of bits required to represent a number in binary.
 */
app.get('/Q4', (req, res) =>{
    let num = 65;  
    console.log(countBits(num));  
})
/*
5. Write a program in that receives a string and a character as input and
capitalizes all the given character from the given string.
*/ 
app.get('/Q5', (req, res) =>{
    let string = 'MunalBhatia';
    console.log(string.toUpperCase());
})  
/**
 * Write a program find the total number of minutes between two given times
(formatted with a colon and am or pm).
Example:
Sample Input: Minutes between 12:01AM to 12:00PM:
Sample Output: Minutes between 12:01AM to 12:00PM: 1439
 * 
 */
app.get('/q8', (req, res) =>{
    dt1 = new Date("October 13, 2020 11:11:00");
    dt2 = new Date("October 13, 2020 11:13:00");
    console.log(diff_minutes(dt1, dt2));
     


})

/**
 * 9 Write a program to separate even and odd numbers of an array of integers.
Put all even numbers first, and then odd numbers. Also remove the duplicate
elements in it.
 */
app.get('/Q9', (req, res) => {
    let arr = ["9", "2", "abc", "82", "82", "1"];

    console.log(removeDuplicates_withEvenOdd(arr));

})

/**
 * 10.Write a program to sort the characters of a string alphabetically.
 */
app.get('/Q10', (req, res) => {
    let randomWord = "sdfjwefic";
    console.log(sortAlpha(randomWord))

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})