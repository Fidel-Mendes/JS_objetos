const cliente = {
    nome:"André",
    idade:36,
    cpf:"1231231231231",
    email:"andre@gmail.com",
    fones: ["11 94301-0919", "11 94814-5376"],

        dependentes : [ 
            {
            nome: "Fidel",
            parentesco: "filho",
            dataNasc: "15/12/205"
        },
        {
            nome:"Juan Gusmaro S Rosa",
            parentesco: "Filho",
            dataNasc: "16/03/2010"
        } 
    ],
    saldo:100,            
    depositar: function(valor) {
    this.saldo += valor;
    }
}   
//METODO FOR IN
    let relatorio = "";
    for (let info in cliente){
        if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
            continue 
        }else{
            relatorio += `
            ${info} - ${cliente[info]}
            `
        }
    }

    console.log(relatorio);