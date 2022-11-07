/*
function btn(){
    // alert("Obrigado!");
    document.getElementById("obg").innerHTML = ("<b>Obrigado por clikar</b>");
    console.log(document.getElementById("obg"));
}

function redirecionar(){
    window.open("https://github.com/MarcosGerminiodeSouza");
    //window.location.href = "https://github.com/MarcosGerminiodeSouza";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML =("Obrigado por passar o mouse");
    //alert("Trocar texto");
    elemento.innerHTML =("Obrigado por passar o mouse");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML =("Passar o mouse");
    elemento.innerHTML =("Passar o mouse");
}

function load(){
    //alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
*/

/*
var validar;
function validaIdade(idade){
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));
*/

/*
function soma (n1, n2) {
    return n1 + n2;
}

console.log(soma(5, 10));
*/


function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

console.log(setReplace("Vai Japão","Japão","Brasil"));


/*
var  d = new Date();
alert(d);
alert(d.getHours() + ":" + d.getMinutes() + "\n");
alert(d.getDate() + "/" + ( d.getMonth()+1) + "/" + d.getFullYear() + ".");


for(var j=1; j<=5; j++){
    alert(j);
};


var i = 0;
while (i<=5){
    console.log(i);
    i++;
};

var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};



var fruta = [{nome: "Maçã", cor: "Vermelha"}, {nome: "Uva", cor: "Roxa"}];
console.log (fruta);
alert (fruta[1].nome);


var fruta = {nome: "Maçã", cor: "Vermelha"};
console.log (fruta.nome);
alert (fruta.cor);

var nome = "Marcos Germinio";
var idade = 26;
var n1 = 4;
var n2 = 10;
var frase = "Japão é o melhor time do mundo!";


var lista = ["Chocolate","Bolo","Alface"];

lista.push ("Tomate");
lista.pop("Bolo");
console.log (lista);

console.log (lista.toString());
console.log (lista.reverse());
console.log (lista.join (" - "));

console.log (lista.toString()[0]);

alert ("Bem-Vindo " + nome);
alert (nome + " tem " + idade +" anos.");
alert (frase.replace("Japão" , "Brasil"));
console.log (nome);
console.log (n1*n2);
console.log(frase.toLowerCase());
*/