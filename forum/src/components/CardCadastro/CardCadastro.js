import InputCadastro from "../InputCadastro/InputCadastro.js"
import { BotaoConfirmar, Container, TituloCadastro, SubtituloCadastro } from "./CardCadastro.jsx"
import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom"

function CardCadastro(){
    return(
        <>
        <Container>
            <TituloCadastro>
                Cadastro
            </TituloCadastro>
            <SubtituloCadastro>
                Seja bem vindo! Para desfrutar do fórum, crie sua conta:
            </SubtituloCadastro>
            <InputCadastro></InputCadastro>
            <Link to="/Avatar">
                <BotaoConfirmar>
                    <Button borderRadius='20' colorScheme='pink' size='md' variant='solid'>  Confirmar  </Button>
                </BotaoConfirmar>
            </Link>
        </Container>
    </>
    )
}


export default CardCadastro