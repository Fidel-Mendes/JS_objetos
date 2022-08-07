const cliente = {
    nome:"André",
    idade:36,
    cpf:"1231231231231",
    email:"andre@gmail.com",
    fones: ["11 94301-0919", "11 94814-5376"]
}

cliente.dependentes = {
    nome: "Fidel",
    parentesco: "filho",
    dataNasc: "15/12/205"
}

console.log(cliente);

cliente.dependentes.nome = "Fidel Castro Mendes";

console.log(cliente);