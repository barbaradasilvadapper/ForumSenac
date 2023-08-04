import CardLogin from "../../components/CardLogin/CardLogin"
import { Fundo } from "./Login.jsx"
import imagemlogin from "../../assets/imagemlogin.png"
import { ImagemCard } from "./Login.jsx"
import { HeaderContainer } from "../../components/Header/Header.jsx"


function Login(){
    return(
        <>
            <HeaderContainer>
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