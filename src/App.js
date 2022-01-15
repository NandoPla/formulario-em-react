import React from 'react';
import { useState } from 'react';

function App() {

  const [digita, setDigita] = useState(""); // digita é o valor digitado do input, setDigita é o valor que se atualiza constantemente

  const [escolha, setEscolha] = useState();

  const handleChange = (event) => { // é a função que muda de acordo com o que digita, é o evento que pega tudo o que a pessoa digita
    setDigita(event.target.value) 
}
  const handleChoice = (event) => {
    setEscolha(event.target.checked)
} 

  return (
    <>
    <form>
      <label for="input">Escreva seu nome: </label>
          <input type="text" value={digita} onChange={handleChange}/><br></br>

      <label for="checkbox">Caixa 1</label>
          <input type="checkbox" value={escolha} onClick={handleChoice}/>

      <label for="checkbox">Caixa 2</label>
          <input type="checkbox" value={escolha} onClick={handleChoice}/>

      <label for="checkbox">Caixa 3</label>
          <input type="checkbox" value={escolha} onClick={handleChoice}/>
          
      <div>{escolha}</div>
    </form>
    
  </>
  );
}

export default App;
// <div>O que você digitou é: {digita}</div> só para testar a responsividade da mudança em tempo real