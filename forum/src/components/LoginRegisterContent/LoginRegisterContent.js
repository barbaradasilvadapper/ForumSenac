import RegisterLoginInput from "../RegisterLoginInput/RegisterLoginInput"
import { BotaoEntrar, Container, Titulo, Subitulo, CheckboxContent } from "./StyledLoginRegisterContent.jsx"
import { Link } from "react-router-dom"

function LoginRegisterContent(props){
    return(
        <>
            <Container>
                <Titulo>
                    {props.PageName}
                </Titulo>
                <Subitulo>
                    {props.PageContent}
                </Subitulo>
                <RegisterLoginInput/>
            </Container>
        </>
    )
}


export default LoginRegisterContent;