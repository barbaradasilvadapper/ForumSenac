
import { Fundo } from "./Cadastro.jsx"
import imagemcadastro from "../../assets/imagemcadastro.png"
import { ImagemCard } from "./Cadastro.jsx"
import CardCadastro from "../../components/CardCadastro/CardCadastro.js"
import { HeaderContainer } from "../../components/Header/Header.jsx"
import { FazerLogin } from "./Cadastro.jsx"
import { Button } from '@chakra-ui/react'


function Cadastro(){
    return(
        <>
            <HeaderContainer>
            <FazerLogin>Já possui conta?  <Button colorScheme='pink' variant='link'>  Login </Button> </FazerLogin>
            </HeaderContainer>
            <Fundo>
                <ImagemCard src={imagemcadastro} alt="monstrinho cadastrando"/>
                <CardCadastro>
                    <input placeholder="Name"/>
                </CardCadastro>
            </Fundo>
        </>
    )
}


export default Cadastro