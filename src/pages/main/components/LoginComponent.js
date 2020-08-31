import React from 'react';

import {LoginDiv, UsuarioLogin, BotaoLogin} from './style'
import TextField from '@material-ui/core/TextField'

const Login = (props) => {
    const login = () => {
        
    }
    return (
        <>
            <LoginDiv>
                <h2 className="titulo">Iniciar sessão</h2>
                <UsuarioLogin />
                <TextField id="outlined-basic" label="Senha:" variant="outlined" type="password"/>
                <BotaoLogin handle={() => login()}>Login</BotaoLogin>
            </LoginDiv>
        </>
    )
}

export default Login;