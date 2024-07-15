console.log("hello world");
var stri = prompt("write a sentance");
console.log("stri", stri);
function counters(str){
    var nbrVowels=0;
    var nbrwords=0;
    var nbrSentance=0;
    for(i=0;i<str.length;i++){
        if(str[i]==" " || str[i]=='.'){
            nbrwords ++;
        }
        if (str[i] == "a" ||str[i]== "e" || str[i]== "i" || str[i]=="o" ||str[i]== "u") {
            nbrVowels=nbrVowels+1;
        }
        nbrSentance ++;


    }
    return{
        nbrSenance:nbrSentance,
        nbrword:nbrwords,
        nbrvowels:nbrVowels,


    }

}
console.log(counters(stri))