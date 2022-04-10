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
    name: "email",
    id:"email",
    type:"email",
    placeholder:" ",
    required:true,
    label: "E-mail",
    class:"cadastro_formulario_caixa",
    position: 1
},{
    name: "confirmaEmail",
    id:"confirmaEmail",
    type:"email",
    placeholder:" ",
    required:true,
    label: "Confirmar E-mail",
    class:"cadastro_formulario_caixa",
    position: 2
},{
    name: "senha",
    id:"senha",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Senha",
    class:"cadastro_formulario_caixa",
    position: 3
}
]

const inforPessoal = [{
    name: "nascimento",
    id:"nascimento",
    type:"date",
    placeholder:" ",
    required:true,
    label: "Data de Nascimento",
    class:"cadastro_formulario_caixa",
    position: 4
},{
    name: "cpf",
    id:"cpf",
    type:"text",
    placeholder:" ",
    required:true,
    label: "CPF",
    class:"cadastro_formulario_caixa",
    position: 5
}]

const endereco = [{
    name: "cep",
    id:"cep",
    type:"text",
    placeholder:" ",
    required:true,
    label: "CEP",
    class:"cadastro_formulario_caixa",
    position: 6
},{
    name: "logradouro",
    id:"logradouro",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Logradouro",
    class:"cadastro_formulario_caixa",
    position: 7
},{
    name: "cidade",
    id:"cidade",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Cidade",
    class:"cadastro_formulario_caixa",
    position: 8
},{
    name: "estado",
    id:"estado",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Estado",
    class:"cadastro_formulario_caixa",
    position: 9
}]

const login = [{
    name: "Email",
    id:"Email",
    type:"text",
    placeholder:" ",
    required:true,
    label: "E-mail",
    class:"login_formulario_caixa",
    position: 10
},{
    name: "Senha",
    id:"Senha",
    type:"password",
    placeholder:" ",
    required:true,
    label: "Senha",
    class:"login_formulario_caixa",
    position: 11
}]

export function infoBasic(){
    return inforBasica;
}

export function infoPess(){
    return inforPessoal;
}

export function enderec(){
    return endereco;
}

export function log(){
    return login
}