
import { Fundo } from "./Cadastro.jsx"
import imagemcadastro from "../../assets/imagemcadastro.png"
import { ImagemCard } from "./Cadastro.jsx"
import CardCadastro from "../../components/CardCadastro/CardCadastro.js"
import { HeaderContainer } from "../../components/Header/Header.jsx"


function Cadastro(){
    return(
        <>
            <HeaderContainer>
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