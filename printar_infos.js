const cliente = {
   /*par de chave */ nome:"André",
                    idade:36,
                    cpf:"1231231231231",
                    email:"andre@gmail.com"
}

console.log(`Meu nome é ${cliente.nome}, e tenho ${cliente.idade} anos` );

console.log(cliente.cpf.substring(0,3));

//substring (método de string) (0,3) (indice 0 do array de caracteres até o 3)