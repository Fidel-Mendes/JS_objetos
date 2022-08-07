const cliente = {
    nome:"André",
    idade:36,
    cpf:"1231231231231",
    email:"andre@gmail.com",
    fones: ["11 94301-0919", "11 94814-5376"],

        dependentes : [{
            nome: "Fidel",
            parentesco: "filho",
            dataNasc: "15/12/205"
        }]

}
//as chaves dentro do parenteses do push significa outro objeto.
cliente.dependentes.push({
    nome:"Juan",
    parentesco: "Filho",
    dataNasc: "16/07/2011"
});

const filhoNovo = cliente.dependentes.filter(dependente => dependente.dataNasc==="16/07/2011");

console.log(filhoNovo[0].nome);