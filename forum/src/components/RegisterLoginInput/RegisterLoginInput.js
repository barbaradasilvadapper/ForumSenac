import { Input, InputGroup } from "@chakra-ui/input"
import { InputUsuario, InputSenha, StyleCheckbox, InputContainer, BotaoEntrar } from './StyledRegisterLoginInput'
import { Checkbox } from '@chakra-ui/react'
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function RegisterLoginInput(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const goToHome = () =>{
        navigate("/Home")
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        const credentials = {email, password}

        axios.post('http://localhost:8000/login', credentials, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            alert(response.data.message)
            goToHome()
        })
        .catch(error => console.log(error))
    }

    return(
    <>
    <form onSubmit={handleSubmit}>
        <InputContainer>
            <InputUsuario>
            <InputGroup>
                <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Email ou Nome de Usuário' 
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </InputGroup>
            </InputUsuario>

            <InputSenha>
            <InputGroup>
                <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Senha' 
                type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </InputGroup>
            </InputSenha>

            <StyleCheckbox>
                <Checkbox colorScheme='blue' defaultChecked>Lembre-se de mim</Checkbox>
            </StyleCheckbox>
        </InputContainer>

        <BotaoEntrar borderRadius='20' size='md' type='submit'> Entrar
            
        </BotaoEntrar>
    </form>
    </>
    )
}

export default RegisterLoginInput;

//<Link to="/">{props.PageButton}</Link>