const boleano1 = false;
const boleano2 = true;
const boleano3 = false;
if(boleano1){
    alert("boleano1 é verdadeiro")
}
else{(boleano1)
    alert("boleano1 é falso")

};


if(boleano1 === boleano2){
    alert("boleano1 e boleano2 são iguais")
}else{
    if(boleano2 === boleano3){
        alert("boleano2 e boleano3 são iguais")
    }else{(boleano2 !== boleano3)
    alert("eles não são iguais")}
};
//Verificaçãode idade
const idade = Number(prompt("qual sua idade?"))
if(idade >= 18){
    alert("você ja pode emitir o titulo de eleitor")
}else{
    if(idade < 18){
        alert("você não pode emitir o titulo de eleitor")
    }
}
// Media de notas
const media = Number(prompt(`Qual foi sua media?`)) ;
if(media >=5){
    console.log(`Sua media foi ${media} Parabéns você foi aprovado`)
}else if(media >=3){
        console.log( `Sua media foi ${media} você esta de recuperação`)
    
}else if (media <=2){
console.log(`sua media foi ${media} você esta reprovado`)
}else{(media === NaN)
console.log("Dado invalido")
}





    