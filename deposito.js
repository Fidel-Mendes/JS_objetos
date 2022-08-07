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
/* nova propriedade */saldo:100,             //separa-lás com virgula
/*nova propriedade */depositar: function(valor) {
                        this.saldo += valor; //+= adicionar a ele mesmo o parametro que sera digitado dentro de "valor"
                    }

}

console.log(`Seu saldo é de: ${cliente.saldo} reais`);
cliente.depositar(30);
console.log(`Seu novo saldo é de: ${cliente.saldo} reais`);

//BONUS
/*O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente. */

const objPersonagem = {
    nome: "Yasuo",
    classe: "Lutador",
    nivel: "18"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Yasuo, o imperdoável"
   
   console.log(objPersonagem.nome) //Yasuo
   console.log(objPersonagem2.nome) //Yasuo, o imperdoável