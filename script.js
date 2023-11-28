function calcularIMC() {
    // Obtém os valores de idade, peso e altura dos campos de entrada do formulário html pelo id.
    
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value).toFixed(2);

    // Verifica se os valores são válidos (não negativos e dentro de um intervalo razoável)
    if (isNaN(peso) || isNaN(altura) || peso < 12 || peso> 900|| altura < 0.3 || altura > 3) {
        alert("Insira valores numéricos válidos e não negativos para peso e altura.");
        return; // Se algum valor for inválido, exibe um alerta e sai da função.
    }
  
    var imc = parseFloat((peso / (altura ** 2)).toFixed(1)); //calcula o IMC
    var pesomin = parseFloat((18.5 * (altura ** 2)).toFixed(1)); //calcula o peso ideal
    var pesomax = parseFloat((24.9 * (altura ** 2)).toFixed(1)); //calcula o peso máximo ideal
    var pesoideal = false; // Variável para exibir ou não a mensagem de peso ideal quando recebe o valor false ou true

    // Exibe o resultado na página HTML
    document.getElementById("resultado").style.display = "block"; // ativa a div com id #resultado como um elemento block
    document.getElementById("returnaltura").innerHTML = altura; // retorna o valor da altura pro span com #returnaltura no html
    document.getElementById("returnpeso").innerHTML = peso; // retorna o valor peso pro span com #returnpeso no html
    document.getElementById("returnimc").innerHTML = imc; // retorna o resultado do cálculo IMC pro span com #returnimc no html
    document.getElementById("info").style.display = "block"; // ativa a div #info que possui elementos da tabela de imc e demais informações

    var mensagemIMC = document.getElementById("mensagemimc"); // Elemento HTML para exibir a mensagem sobre o IMC

    function limparDestaqueTabela() {
        document.getElementById("baixopeso").classList.remove("DestaqueTabela");
        document.getElementById("pesonormal").classList.remove("DestaqueTabela");
        document.getElementById("preobesidade").classList.remove("DestaqueTabela");
        document.getElementById("grauI").classList.remove("DestaqueTabela");
        document.getElementById("grauII").classList.remove("DestaqueTabela");
        document.getElementById("grauIII").classList.remove("DestaqueTabela");
    } // remove a class de destaque de todos os itens da tabela
    
    // Define a mensagem com base no valor do IMC
    if (imc < 18.5) {
        mensagemIMC.innerHTML = "Peso abaixo do normal";
        limparDestaqueTabela();
        document.getElementById("baixopeso").classList.add("DestaqueTabela");
        document.getElementById("returnimc").style.color = "#2d4ca8"; 
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagemIMC.innerHTML = "Seu peso está dentro dos padrões";
        limparDestaqueTabela();
        document.getElementById("pesonormal").classList.add("DestaqueTabela");
        document.getElementById("returnimc").style.color = "#32CD32"; 
        pesoideal = true; // Se o peso está dentro do padrão, será verdadeiro
    } else if (imc >= 25 && imc <= 29.9) {
        mensagemIMC.innerHTML = "Você está com Pré-obesidade";
        limparDestaqueTabela();
        document.getElementById("preobesidade").classList.add("DestaqueTabela");
        document.getElementById("returnimc").style.color = "#fec300";
    } else if (imc >= 30 && imc <= 34.9) {
        mensagemIMC.innerHTML = "Você tem Obesidade Grau I";
        limparDestaqueTabela();
        document.getElementById("grauI").classList.add("DestaqueTabela");
        document.getElementById("returnimc").style.color = "#fe6200"; 
    } else if (imc >= 35 && imc <= 39.9) {
        mensagemIMC.innerHTML = "Você tem Obesidade Grau II";
        limparDestaqueTabela();
        document.getElementById("grauII").classList.add("DestaqueTabela");
        document.getElementById("returnimc").style.color = "#ff3001"; 
    } else if (imc >= 40) {
        mensagemIMC.innerHTML = "Você tem Obesidade Grau III ou obesidade mórbida.";
        limparDestaqueTabela();
        document.getElementById("grauIII").classList.add("DestaqueTabela");
        document.getElementById("returnimc").style.color = "#c61616";
    }
    

    var mensagemPeso = document.getElementById("mensagempeso"); // Elemento HTML para exibir a mensagem sobre o peso ideal

    // Define a mensagem de peso ideal, se a variável pesoideal for falsa
    if (!pesoideal) {
        mensagemPeso.innerHTML = "Seu peso ideal é entre " + pesomin + "kg e " + pesomax + "kg";
    } else {
        mensagemPeso.innerHTML = ""; // Se o peso está dentro do padrão, não exibe nenhuma mensagem.
    }

}

 function toggleText(imageNumber) {
    var text = document.querySelector('.text-' + imageNumber);
    if (text.style.display === 'none' || text.style.display === '') {
      text.style.display = 'block';
    } else {
      text.style.display = 'none';
    }
  }


document.getElementById("ano").innerHTML = new Date().getFullYear();



