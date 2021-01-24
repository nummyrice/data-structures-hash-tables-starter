# Hash Tables Project

Clone the project from the [starter](https://github.com/appacademy-starters/data-structures-hash-tables-starter).

## Learning Goals

* Compare and contrast the properties and operations of an Array, Linked List, and Hash Table
* Define a hash collision and how to handle them
* Identify the mechanics and complexity of adding and removing elements from a Hash Table
* Use hash tables to improve time complexity through caching (memoization and tabulation)
* Select a Hash Table when it is the appropriate tool for solving a problem

# Part 1: Implementing a Hash Table

Recall the key features of a Hash Table: 
- Getting is O(1)
- Setting is O(1)
- Deleting is O(1)

Hash tables have very efficient operations with regards to time complexity and can be used in many cases to vastly
speed up a solution. Let's try to make our own! We'll also be exploring a unique data structure called the LRU Cache 
and implement our own as well.

Starter code is provided for you in `/implementation/hashTable.js`.

<br>

# Part 2: Implementing a LRU Cache

Let's take a look at a unique data structure that is similar to a hash table called the LRU Cache, or Least Recently 
Used Cache. An LRU Cache is a data structure valued for its constant time read and write operations. Its methods, 
get(key) and set(key, val), are both O(1), just like a Hash Table.

However, unlike a Hash Table, instead of re-sizing once it reaches its maximum capacity for stored items, it instead 
removes the least recently used item from the cache, also in O(1) time.

NOTE: We determine the item that is "Least Recently Used" by its most-recent "get" time, not just by its creation time!

Here's an example of how it should be used:
```js
const lruCache = new LRUCache(4);   // => limit of 4 items
lruCache.set('a', 'A');
lruCache.set('b', 'B');
lruCache.set('c', 'C');
lruCache.set('d', 'D');
lruCache.set('e', 'E');

lruCache.get('c')                   // => 'C'
lruCache.get('b')                   // => 'B'

// Item 'a' was removed because it was the oldest item by insertion/usage

lruCache.get('a')                   // => null

// Next, item 'd' is removed to make room, because it is the oldest by usage, which takes priority.

lruCache.set('f', 'F');

// Item 'e' is also removed, because it was retrieved before item 'b' was last retrieved.

lruCache.set('g', G);
```

We will be utilizing a Doubly Linked List to create it, so let's get started!

Starter code is provided for you at `/implementations/lruCache.js`;
<br>

# Part 3: Practice Problems - Easy

### Anagrams

Given two strings, determine whether the strings are anagrams of each other. Solve this in O(m+n) time.

Example:
```js
anagrams('elvis', 'lives');     // => true
anagrams('coding', 'rocks');     //     // => false
```

<br>

### Common Elements

Given two arrays of integers, return an array of unique integers that are present in both arrays. The resultant 
array can be returned in any order. Solve this in O(m+n) time.

Example:
```js
commonElements([1,2,3], [3,4,5]);     // => [3]
commonElements([2,4,6], [5,4,3,2,1]);     // => [2,4]
```
<br>

### Duplicates

Given an array of integers, one integer appears twice while all other integers appear once. Find the duplicate 
integer. Solve this in O(n) time.

Example:
```js
duplicate([2,2,1]);     // => 2
duplicate([7,2,4,9,5,4,8]);     // => 4
```
<br>

### Make Balloons

Given a string, return the number of times the word "balloon" can be formed using letters in the string. Solve 
this in O(n) time.

<br>

### Max Subarray Length

Given an array of integers, return the length of the longest subarray where the difference between its maximum 
value and its minimum value is at most 1. Solve this in O(n) time.

Example: 
```js
maxSubarr([1,3,2,2,5,2,3,7]);     // => 5 because the longest subarray is [3,2,2,2,3]
maxSubarr([1,1,1,1,3]);     // => 4 because the longest subarray is [1,1,1,1]
```
<br>

### New Alphabet

Imagine the standard alphabet order (abc...xyz) is rearranged. Given a string and a new alphabet order, determine 
whether the characters in the string appear in lexicographically increasing order. Solve this in O(m + n) time.

Example:
```js
newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz');     // => true
newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz');     // => false
newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz');     // => true
```
<br>

### Two Sum Revisited

Given an array of integers nums and an integer target, return a boolean indicating whether two numbers in the array 
can sum to the target. You may not use the same element twice. Solve this in O(n) time with a hash table this time.

Example:
```js
twoSum([2, 7, 11, 15], 22);     // => true
twoSum([3, 4, 5], 6);     // => false
```
<br>

### Word Patterns

Given a pattern and an array of strings, determine whether the array follows the specified pattern. 

Example:
```js
wordPattern("ABBA", ['dog', 'cat', 'cat', 'dog']);     // => true
wordPattern("ABBA", ['dog', 'dog', 'dog', 'dog']);     // => false
wordPattern("AAAA", ['dog', 'dog', 'dog', 'dog']);     // => true
wordPattern("ABCD", ['dog', 'cat', 'dog', 'cat']);     // => false
```
<br>

# Part 4: Practice Problems - Challenge

### Group Anagrams

Given an array of strings, group the anagrams together. You can return the  answer in any order. This 
can be solved in n * klog(k) time.

Example:
```js
groupAnagrams(["eat","tea","tan","ate","nat","bat"]);     //  => [["bat"],["nat","tan"],["ate","eat","tea"]]
```
<br>

### Kth Most Frequent

Given a string, return the kth most frequent character in the string. Solve this in nlogn time.

Example:
```js
kth('aaabbc', 1);     //  => 'a'
kth('aaabbc', 2);     //  => 'b'
kth('aaabbc', 3);     //  => 'c'
```
<br>

### Longest Palindrome

Given a string, determine the length of the longest palindrome that can be built with those letters. Solve 
this in O(n) time.

Example:
```js
longestPalindrome("abccccdd");     //  => 7 because the palindrome "dccaccd" can be built.
```
<br>

### Longest Substring

Given a string, find the length of the longest substring without repeating characters. Solve this in O(n) time.

Example:
```js
longestSubstr("abcabcbb");     //  => 3, where the longest substring is "abc"
longestSubstr("bbbbb");     //  => 1, where the longest substring is "b"
```