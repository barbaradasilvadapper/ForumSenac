import { BotaoEntrar, Container, TituloLogin } from "./CardLogin.jsx"


function CardLogin(){
    return(
        <>
            <Container>
                <TituloLogin>
                    Login
                </TituloLogin>

                <BotaoEntrar>
                    Entrar
                </BotaoEntrar>
            </Container>
        </>
    )
}


export default CardLogin