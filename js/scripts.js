const input = "Believe you can and you're halfway there. Theodore Roosevelt";
const vowelArray = ["a","e","i","o","u"];


window.addEventListener("load", function() {

});
function individualVowel(vowelArray) {
  for (let i = 0; i < vowelArray.length; i+=1) {
    let individualVowelOutput = vowelArray[i];
    console.log(individualVowelOutput);
  }
  // vowelArray.forEach(function(vowel) {
  //   let individualVowelOutput = vowel;
  //   return individualVowelOutput;
  //   console.log(individualVowelOutput);
  // });
}

individualVowel(vowelArray);

for (let i = 0; i < vowelArray.length; i+=1) {
  let individualVowelOutput = vowelArray[i];
  console.log(individualVowelOutput);
}
