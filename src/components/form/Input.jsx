import React, {useState } from 'react';


const Form = (props) => {
    const [nome, setNome] = useState('Pedro')

    return (
        <>
        <h3>{nome}</h3>
      <input type="text" value={nome} 
      onChange={e => setNome(e.target.value)} 
      placeholder="Insira seu nome"
      />
        </>
    )
}
export default Form;