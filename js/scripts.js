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

let vowelArray = text.split(" ");


function replaceVowel(word, text) {
  let textArray = text.split(" ");
  
  for (let i = 0; i < textArray.length; i +=1) {
    if (textArray[i].includes(word)) {
      noVowelElement = textArray[i].replaceAll(word, "-");
      textArray[i] = noVowelElement;
    } else {
      VowelElement = textArray[i];
      textArray[i] = VowelElement;
    };
  };
  return textArray;
}







// UI Logic

const input = "Believe you can and you're halfway there. Theodore Roosevelt";
const vowelArray = ["a","e","i","o","u"];


window.addEventListener("load", function() {

});


