const cliente = {
    nome:"Maria",
    idade:43,
    cpf:"11111111111",
    email:"Maria@gmail.com",
    fones: ["11 9400000000", "11 99999999"],

        dependentes : [ 
            {
            nome: "Pedro",
            parentesco: "Filho",
            dataNasc: "23/04/2000"
        },
        {
            nome:"Juan",
            parentesco: "Filho",
            dataNasc: "13/03/2011"
        } 
    ],
    saldo:100,            
    depositar: function(valor) {
    this.saldo += valor;
    }
}  

//const propsClientes = Object.keys(cliente);

//console.log(propsClientes); // resultado sera um array de todas as chaves do objeto cliente

function oferecerSeg(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))//includes verifica se dado "X" esta incluido, e para fazer isso basta escolher o elemento e escrevelo como parâmetro 
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    } 
}
//                 valores
console.log(Object.values(cliente));
//                 exibirá valores porém em forma de array
//console.log(Object.entries(cliente));
oferecerSeg(cliente);