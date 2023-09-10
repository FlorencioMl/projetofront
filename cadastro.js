//Ana Flavia Melo Florencio 
const pessoas = [];
//armazena as pessoas cadastradas 
//cadastro de pessoas
function cadastrarPessoa (pessoa){
    pessoa.id = gerarID()
    pessoas.push(pessoa);
    // push adiciona 
}
//gera id para cada pessoa cadastrada 
function gerarID() {
    return Math.floor(Math.random() * 1000);
}
//funcao que atualiza os dados da pessoa especifica cadastrada 
function atualizarPessoa(id, pessoaAtualizada) {
    for( let i = 0; i < pessoas.length; i++){
        if (pessoas[i].id === id) {
            pessoas[i] = {...pessoas[i], ...pessoaAtualizada};
            break;
        }
    }
}
// funcao para deletar pessoa a partir da posicao 0 1 2
function deletarPessoa(id){
    const index = pessoas.findIndex((pessoa) => pessoa.id === id);
    if (index !== -1) {
        pessoas.splice(index, 1);
        //splice exclui elementos do array, ou seja, cadastro 
    }
}
function listarPessoas(){
    return pessoas;
}
//essa funcao permite que seja impresso no console os resultados das outras funcoes 
function organizarPessoa(pessoa) {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`;
}

cadastrarPessoa({nome: "Ana Flavia", idade: 23, cidade: "Passo Fundo"});
cadastrarPessoa({nome: "Luiz", idade: 26, cidade: "Passo Fundo"});
cadastrarPessoa({nome: "Gustavo", idade: 19, cidade: "Alegrete"});
// imprimir as pessoas que cadastrei no console 
console.log("Pessoas cadastradas:");
pessoas.forEach(pessoa => {
    console.log(organizarPessoa(pessoa));
});

const pessoaAtualizada = {id: pessoas[1].id, nome: "Sem bigode", idade: 26, cidade: "Porto Alegre"};
atualizarPessoa(pessoas[1].id, pessoaAtualizada);
//imprimir todas as pessoas cadastradas porem com a atualizada no console 
console.log("Pessoas atualizadas:");
pessoas.forEach(pessoa => {
    console.log(organizarPessoa(pessoa));
});

deletarPessoa(pessoas[0].id);
//imprimir no console sem a pessoa que deletei 
console.log("Pessoas deletadas:");
pessoas.forEach(pessoa => {
    console.log(organizarPessoa(pessoa));
});

const pessoasCadastradas = listarPessoas();
//imprimir as pessoas cadastradas finais com a atualizacao
console.log("Lista de pessoas cadastradas:");
pessoas.forEach(pessoa => {
    console.log(organizarPessoa(pessoa));
});