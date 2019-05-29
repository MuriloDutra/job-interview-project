function initialize(){
    //Iniciando a chamada do método que inicia todo o processo. Essa chamada ocorrerá TRINTA vezes.
    for(let i = 1; i <= 30; i++){
        preenchimentoDados(i);
    }
}

function preenchimentoDados(num){
    let alunos = ["Maria", "João"]; //Criação de vetor com nome dos alunos
    let melhorAluno = alunos[Math.floor(Math.random() * alunos.length)]; //Usando Math.random() para sortear qual será o melhor aluno

    //Usando Math.random() para sortear a quantidade de frutas
    let quantidadeMaca = Math.floor((Math.random() * 5) + 1);
    let quantidadePera = Math.floor((Math.random() * 5) + 1);

    //Chamando a função que irá retornar a QUANTIDADE e QUAIS frutas a professora irá levar para a casa
    let array = verificaFrutas(quantidadePera, quantidadeMaca, melhorAluno);

    let corpoTabela = $("#corpoTabela");//Pegando tBody para manipular

    //Criando a TR que será inserida na tabela e seus TDs. Ja configurando os valores também
    let tr = $("<tr>");
    let tdDia = $("<td>").text(num);
    let tdPeras = $("<td>").text(quantidadePera);
    let tdMacas = $("<td>").text(quantidadeMaca);
    let tdMelhorAluno = $("<td>").text(melhorAluno);    
    let tdFruta01 = $("<td>").text(array[0]);
    let tdFruta02 = $("<td>").text(array[1]);
    let tdFruta03 = $("<td>").text(array[2]);

    tdMelhorAluno.addClass("destaque");//Adicionando class para o nome do melhor aluno ficar em negrito
    
    //Adicioanando class para deixar o número que mostra "quantidade de frutas" com a cor da fruta selecionada
    tdPeras.addClass("pera destaque");
    tdMacas.addClass("maca destaque");

    //Adicionando os TDs a seu pai TR
    tr.append(tdDia);
    tr.append(tdPeras);
    tr.append(tdMacas);
    tr.append(tdMelhorAluno);
    tr.append(tdFruta01);
    tr.append(tdFruta02);
    tr.append(tdFruta03);

    //Adicionando TR a seu pai tBody
    corpoTabela.append(tr);
}

function verificaFrutas(qtdPera, qtdMaca, aluno){

    var array = ["", "", ""];//vetor que será retornado com as frutas

    if(aluno == "Maria"){
        
        //Preenchendo o vetor com a quantidade de peras que MARIA trouxe
        for(i = 0; i < qtdPera; i++){
            if(i < 3){
                array[i] = "Pera";
            }
        }
        
        /*
            Verificando se Maria trouxe a quantidade suficiente de PERAS, caso não, 
            o restante será preenchido com Maçãs de João.
        */
        array = verificaVetor(array, 'Maçã', qtdMaca);
    }else{
        for(i = 0; i <qtdMaca; i++){
            if(i < 3){
                array[i] = "Maçã";
            }
        }

        /*
            Verificando se João trouxe a quantidade suficiente de MAÇÃS, caso não, 
            o restante será preenchido com Peras de Maria.
        */
        array = verificaVetor(array, 'Pera', qtdPera);
    }
    return array;
}

function verificaVetor(array, fruta, qtdFruta){
    for(i = 0; i < array.length; i++){
        /*
            Percorrendo o vetor para verificar se não há espaço em branco, caso haja, 
            será preenchido com a fruta passada como parâmetro
        */
        if(array[i] == "" && i <= qtdFruta){
            array[i] = fruta;
        }
    }
    
    return array;
}
initialize();