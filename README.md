Describe: individualVowel()

Test: "It should return individual vowels to be used for removal from the string"
Code:
const vowelArray = ["a","e","i","o","u"];
individualVowel(vowelArray);
Expected Output: individualVowel = "a", "e", "i", "o", "u", etc. 

  
 
Describe: removeVowel()

Test: "It should turn each letter of the string into an element in an array."
Code:
const text = "random words";
const word = "a";
removeVowel(word, text);
Expected Output: textArray = ["r","a","n","d","o","m","w","o","r","d","s"]

Test: "It should remove the letter "a" from string"
Code: 
const vowel = "a";
const string = "random words";
removeFirstVowel("a", "random words");
Expected Output: "r_ndom words"

