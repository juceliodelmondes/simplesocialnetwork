import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

export const LoginDiv = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    width:300px;
    height:300px;
    align-items:center;
    .titulo {

    }
`;

export function UsuarioLogin() {
    return (
        <TextField id="outlined-basic" label="Usuário" variant="outlined"
        style={{
            fontWeight: 'bold',
            fontSize: '2rem',
            fontWeight: 600,
            margin: '10px',
            outlineColor:'yellow'
        }} 
        
        ></TextField>
    )
}

export function BotaoLogin({children, handle}) {
    return <Button variant="contained"
    style={{
        backgroundColor: '#012935',
        color: '#fff',
        fontWeight: 600,
        marginTop:'25px',
        borderRadius:'1px'
        // fontSize: '2rem'
    }} 
    
    onClick={handle}
    >{children}</Button>
}