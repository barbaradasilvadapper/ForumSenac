import { useState } from "react"
import { ChakraProvider } from '@chakra-ui/react'
import {
    Input,
    InputGroup,
  } from "@chakra-ui/input"
import { InputStyle } from './InputCadastro.jsx'


function InputCadastro(){

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleInputName = (event)=>{
        setName(event.target.value)
    }

    const handleInputUsername = (event)=>{
        setUsername(event.target.value)
    }

    const handleInputEmail = (event)=>{
        setEmail(event.target.value)
    }

    const handleInputPassword = (event)=>{
        setPassword(event.target.value)
    }

    const handleInputPassword2 = (event)=>{
        setPassword2(event.target.value)
    }

    console.log(name)
    console.log(username)
    console.log(email)
    console.log(password)

    return(
    <>
    <ChakraProvider>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Nome Completo'
            type="name" value={name} onChange={handleInputName}/>
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Nome de Usuário'
            type="username" value={username} onChange={handleInputUsername}/>
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Email'
            type="email" value={email} onChange={handleInputEmail}/>
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Senha' 
            type="password" value={password} onChange={handleInputPassword}/>
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Confirmar Senha' 
            type="password2" value={password2} onChange={handleInputPassword2}/>
        </InputGroup>
        </InputStyle>
    </ChakraProvider>
    
    </>
    )
}

export default InputCadastro