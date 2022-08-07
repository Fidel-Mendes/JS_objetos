const clientes = [
        {
        nome:"Meliça",
        cpf:"27777777777",
        dependentes: [{
            nome: "Fabio",
            parentesco: "filho",
            dataNasc: "15/10/2002"
            },
            {
            nome:"Juan",
            parentesco: "Filho",
            dataNasc: "10/03/2011"
            }]
        },
        {
            nome:"Matheus",
            cpf:"123123123123",
            dependentes: [{
                nome: "Gabriel",
                parentesco:"Irmão",
                dataNasc:"01/10/2001"
            }],

        }
    ]

    const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

    //console.log(listaDependentes); modo clássico

    //... espalha dentro do array

    console.table(listaDependentes); //esibira no console as informações em forma de tabela para uma melhor vizualização