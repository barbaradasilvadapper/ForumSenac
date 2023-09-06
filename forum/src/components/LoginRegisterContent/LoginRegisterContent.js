import RegisterLoginInput from "../RegisterLoginInput/RegisterLoginInput"
import { BotaoEntrar, Container, Titulo, Subitulo, CheckboxContent } from "./StyledLoginRegisterContent"
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
                <BotaoEntrar borderRadius='20' size='md'>
                    <Link to="/Home">{props.PageButton}</Link>
                </BotaoEntrar>
            </Container>
        </>
    )
}


export default LoginRegisterContent;