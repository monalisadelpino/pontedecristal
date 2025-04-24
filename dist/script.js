function jogar() {
  let venceu = false; // Começa como falso porque o jogador ainda não venceu
  for (let rodada = 1; rodada <= 3; rodada++){
    console.log("Rodada: " + rodada)
  
    var escolhaJogador = prompt ("Nível: " + rodada +". " + "Escolha o vidro (1, 2 ou 3)")
    
    // Converte para número
    escolhaJogador = parseInt(escolhaJogador);
    
    // Verifica se o número NÃO é 1, 2 ou 3
    if (escolhaJogador !== 1 && escolhaJogador !== 2 && escolhaJogador !== 3) {
      alert("Opção inválida! Escolha apenas 1, 2 ou 3.");
      return; // Sai da função, impedindo o jogo de continuar
    }
    
    var pisoQuebrado = Math.floor(Math.random () * 3) + 1
  
    if (escolhaJogador == pisoQuebrado){
    alert ("O vidro quebrou! Fim de jogo")
    return; 
      // Sai da função e o jogador não venceu, então o venceu continua false.
    }
    else {
      alert ("Passou! Piso quebrado estava no: " + pisoQuebrado)
    };
 
  };
  
  // Se chegou aqui, significa que venceu as 3 rodadas
    venceu = true;
    alert ("Você venceu! Parabéns.");
  
};