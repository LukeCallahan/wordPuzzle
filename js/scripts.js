// Business Logic

function individualVowel(vowelArray) {
  for (let i = 0; i < vowelArray.length; i+=1) {
    let individualVowelOutput = vowelArray[i];
    console.log(individualVowelOutput);
  }
}

function removeVowel(word, text) {
  let noVowelsArray = [];
  
  textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (element.includes("a")) {
      noVowelElement = element.replaceAll("a", "-");
      noVowelsArray.push(noVowelElement);
    } else {
      noVowelElement = element;
      noVowelsArray.push(noVowelElement);
    };
  })
    return noVowelsArray;
}









// UI Logic

const input = "Believe you can and you're halfway there. Theodore Roosevelt";
const vowelArray = ["a","e","i","o","u"];


window.addEventListener("load", function() {

});


