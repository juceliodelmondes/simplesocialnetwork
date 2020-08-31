//Main page have a validate information, login and register structure
import React, {useState, useEffect} from 'react';
import Login from './components/LoginComponent';
import Register from './components/RegisterComponent';

import {Container,
    DivCentral
    } from "./styles/style";

function Main(props) {
    const [divInicial, setDivInicial] = useState("login");

    const ComponenteInicial = () => {
        if(divInicial === "login") return <Login/>
        if(divInicial === "register") return <Register/>
    }
    return (
        <>
            <Container>
                <DivCentral>
                    <ComponenteInicial/>
                </DivCentral>
            </Container>
        </>
    )
}

export default Main;
