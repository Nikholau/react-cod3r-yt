import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">

            <Card titulo="#11 - Mega" color="#483D8B">
                <Mega qtdeNumero={8}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color="#4682B4">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#FAEBD7">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação indireta" color="#48D1CC">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação direta" color="#00FFFF">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Condicional v2" color="#7FFFD4">
                <CondicionalComIf numero={12}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional v1" color="#2E8B57">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#04 - Repeticao" color="#6495ED">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#00008B">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parâmetro" color="#4B0082">
                <ComParametro titulo="Esse é o título"
                    subtitulo="Esse é o subtitulo" />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#00BFFF">
                <Primeiro />
            </Card>
            </div>
        </div>
    );
}
export default App;
