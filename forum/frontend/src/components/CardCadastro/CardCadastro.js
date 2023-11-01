import InputCadastro from "../InputCadastro/InputCadastro.js"
import { BotaoConfirmar, Container, TituloCadastro, SubtituloCadastro } from "./CardCadastro.jsx"


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

        </Container>
    </>
    )
}


export default CardCadastro