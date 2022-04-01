import React from 'react';

function Produto({ nome, propriedades }) {
  return (
    <div>
      <p>{nome}</p>

      <ul>
        {propriedades.map((propriedade) => <li key={propriedade[0]}>{propriedade}</li>)}
      </ul>
    </div>
  )
}

export default Produto