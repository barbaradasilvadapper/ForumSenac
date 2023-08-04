import InputLogin from "../InputLogin/InputLogin.js"
import { SubituloLogin } from "./CardLogin.jsx"
import { BotaoEntrar, Container, TituloLogin } from "./CardLogin.jsx"


function CardLogin(){
    return(
        <>
            <Container>
                <TituloLogin>
                    Login
                </TituloLogin>
                <SubituloLogin>
                    Bem vindo de volta! Insira seu login para entrar em sua conta:
                </SubituloLogin>
                <InputLogin></InputLogin>
                <BotaoEntrar>
                    Entrar
                </BotaoEntrar>
            </Container>
        </>
    )
}


export default CardLogin