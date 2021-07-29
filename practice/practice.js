const HashTable = require('../hash-table/hash-table');

function anagrams(str1, str2) {
  let letters = {};
  for (let letter of str1){
    if (letters[letter]){
      letters[letter]++;
    }
    else {
      letters[letter] = 1;
    }
  }
  for (let letter of str2){
    if (letters[letter]){
      letters[letter]--;
    }
    else {
      return false;
    }
  }
  let valuesArr = Object.values(letters);
  return valuesArr.every(x => x === 0);

  console.log(letters)
}

function commonElements(arr1, arr2) {

  // Fill this in

}


function duplicate(arr) {

  // Fill this in

}


function twoSum(nums, target) {

  // Fill this in

}


function wordPattern(pattern, strings) {

  // Fill this in

}


function wordPattern(pattern, strings) {

  // Fill this in

}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
