const cliente = {
    nome:"André",
    idade:36,
    cpf:"1231231231231",
    email:"andre@gmail.com"
}
//                0       1      2      3
const chaves = ["nome","idade","cpf","email"];

//console.log(cliente[chaves[0]]) // resultado André

chaves.forEach(info => console.log(cliente[info]));

// se tentarmos acessar uma chave que não existe, ela sera declarada com "undefined"