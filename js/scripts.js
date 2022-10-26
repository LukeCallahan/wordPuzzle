// Business Logic

const text = "Believe you can and you're halfway there. Theodore Roosevelt";
const vowelArray = ["a","e","i","o","u"];

function individualVowel(vowelArray) {
  for (let i = 0; i < vowelArray.length; i+=1) {
    let individualVowelOutput = vowelArray[i];
    console.log(individualVowelOutput);
    return individualVowelOutput;
  }
}

function intake(vowelArray, text) {
  vowelArray.forEach(function(vowelToTest) {
    cleanArray = replaceVowel(vowelToTest, text);
  });
  // console.log(textArray);
  return cleanArray;
}




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




window.addEventListener("load", function(event) {
  event.preventDefault();
  let result = document.getElementById("results");

  intake(vowelArray, text);
  result.append(cleanArray);
});


