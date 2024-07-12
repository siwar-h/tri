function compteLengthCaracteres(str){
    if(!str){
        return 0;
    }
    return str.length
}

function umberWords(str){
    var nbrwords=0;
    if(!str){
        return 0;
    }

    for(i=1;i<str.length;i++){
        if(str[i-1] !==' ' && str[i]==' '){
            nbrwords++  
        }
        return nbrwords;

    }

}
function numberVowels(str){
    var nbrVowels=0;
    if(!str){
        return 0;
    }
    for(i=0;i<str.length;i++){
        if(str[i] =='a' || 'e' || 'i' || 'o' || 'u' || 'y')
            nbrVowels++;
    }
    return nbrVowels;

}