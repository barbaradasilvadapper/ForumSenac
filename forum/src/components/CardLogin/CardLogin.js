import InputLogin from "../InputLogin/InputLogin.js"
import { SubituloLogin } from "./CardLogin.jsx"
import { BotaoEntrar, Container, TituloLogin } from "./CardLogin.jsx"
import { Button } from '@chakra-ui/react'

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
                    <Button borderRadius='20' colorScheme='pink' size='md' variant='solid'>  Entrar  </Button>
                </BotaoEntrar>
            </Container>
        </>
    )
}


export default CardLogin