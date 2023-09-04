import CardLogin from "../../components/CardLogin/CardLogin"
import { Fundo } from "./Login.jsx"
import imagemlogin from "../../assets/imagemlogin.png"
import { ImagemCard } from "./Login.jsx"
import { HeaderContainer } from "../../components/Header/Header.jsx"
import { FazerCadastro } from "./Login.jsx"
import { Button } from '@chakra-ui/react'


function Login(){
    return(
        <>
            <HeaderContainer>
                <FazerCadastro>Não possui conta?  <Button colorScheme='pink' variant='link'> Cadastre-se </Button> </FazerCadastro>

            </HeaderContainer>
            <Fundo>
                <ImagemCard src={imagemlogin} alt="monstrinho bravo"/>
                <CardLogin>
                </CardLogin>
            </Fundo>
        </>
    )
}


export default Login