import imagemcadastro from "../../assets/imagemcadastro.png"
import LoginRegisterContent from "../../components/LoginRegisterContent/LoginRegisterContent"
import { HeaderContainer } from "../../components/Header/StyledHeader"
import { FazerLogin, Fundo, ImagemCard } from "./StyledCadastro"
import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom"


function Cadastro(){
    return(
        <>
            <HeaderContainer>
                <FazerLogin>Já possui conta?  
                    <Button colorScheme='pink' variant='link' size="medium">
                        <Link to="/Home">
                            Faça seu Login
                        </Link>
                    </Button>
                </FazerLogin>
            </HeaderContainer>
            <Fundo>
                <ImagemCard src={imagemcadastro} alt="monstrinho cadastrando"/>
                <LoginRegisterContent PageName="Cadastro" PageButton="Cadastrar" PageContent="Seja bem vindo! Para desfrutar do fórum, crie sua conta:">
                    <input placeholder="Name"/>
                </LoginRegisterContent>
            </Fundo>
        </>
    )
}


export default Cadastro