console.log("hello world");
var stri = prompt("write a sentance");
console.log("stri", stri);

function compteLengthCaracteres(str) {
  if (!str) {
    return 0;
  }
  return str.length;
}

function umberWords(str) {
  var nbrwords = 0;
  if (!str) {
    return 0;
  }

  for (i = 0; i < str.length; i++) {
    if (str[i] == " " || str[i] == ".") {
      nbrwords++;
    }
  }
  return nbrwords;
}
function numberVowels(str) {
  var nbrVowels = 0;
  if (!str) {
    return 0;
  }
  for (i = 0; i < str.length; i++) {
    if (str[i] == "a" ||str[i]== "e" || str[i]== "i" || str[i]=="o" ||str[i]== "u") {
      nbrVowels=nbrVowels+1;
    }
  }
  return nbrVowels;
}
function finalResult(str) {
  return {
    length: compteLengthCaracteres(str),
    numberWords: umberWords(str),
    numberVowels: numberVowels(str),
  };
}
console.log(finalResult(stri));
