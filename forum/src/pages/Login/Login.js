// import LoginRegisterContent from "../../components/LoginRegisterContent/LoginRegisterContent"
import imagemlogin from "../../assets/imagemlogin.png"
import { HeaderContainer } from "../../components/Header/StyledHeader"
import { FazerCadastro, ImagemCard, Fundo } from "./StyledLogin"
import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom"


function Login(){
    return(
        <>
            <HeaderContainer>
                <FazerCadastro>Não possui conta?  
                    <Button colorScheme='pink' variant='link' size="medium"> 
                        <Link to="/Cadastro">
                            Cadastre-se
                        </Link>
                    </Button>
                </FazerCadastro>
            </HeaderContainer>
            <Fundo>
                <ImagemCard src={imagemlogin} alt="monstrinho bravo"/>
                {/* <LoginRegisterContent PageName="Login" PageButton="Entrar" PageContent="Bem vindo de volta! Insira seu login para entrar em sua conta:"/> */}
            </Fundo>
        </>
    )
}


export default Login;