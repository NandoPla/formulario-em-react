import React from 'react';
import { useState } from 'react';

function App() {

  const [digita, setDigita] = useState(""); // digita é o valor digitado do input, setDigita é o valor que se atualiza constantemente
  const handleChange = (event) => { // é a função que muda de acordo com o que digita, é o evento que pega tudo o que a pessoa digita
    setDigita(event.target.value) 
}

  return ( //value é o parametro
    <>
    <form>
      <label>Coloque seu nome: 
        <input type="text" value={digita} onChange={handleChange}/>
      </label>
    </form>
  
  <div>{digita}</div>

  </>
  );
}

export default App;
