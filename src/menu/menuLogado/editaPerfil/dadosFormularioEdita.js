const inforBasica = [
    {
    name: "nome",
    id:"nome",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Nome",
    class:"cadastro_formulario_caixa",
    position: 0
},{
    name: "senha",
    id:"senha",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Nova Senha",
    class:"cadastro_formulario_caixa",
    position: 1
}
]

const endereco = [{
    name: "cep",
    id:"cep",
    type:"text",
    placeholder:" ",
    required:true,
    label: "CEP",
    class:"cadastro_formulario_caixa",
    position: 2
},{
    name: "logradouro",
    id:"logradouro",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Logradouro",
    class:"cadastro_formulario_caixa",
    position: 3
},{
    name: "cidade",
    id:"cidade",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Cidade",
    class:"cadastro_formulario_caixa",
    position: 4
},{
    name: "estado",
    id:"estado",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Estado",
    class:"cadastro_formulario_caixa",
    position: 5
}]


export function infoBasic(){
    return inforBasica;
}

export function enderec(){
    return endereco;
}
