
import { ChakraProvider } from '@chakra-ui/react'
import {
    Input,
    InputGroup,
  } from "@chakra-ui/input"
import { InputUsuario, InputSenha } from './InputCadastro.jsx'
import { InputConfirmarSenha } from './InputCadastro.jsx'
import { InputEmail } from './InputCadastro.jsx'
import { InputNome } from './InputCadastro.jsx'


function InputCadastro(){
    return(
    <>
    <ChakraProvider>

        <InputNome>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' variant='filled' color='gray.300' placeholder='Nome Completo'/>
        </InputGroup>
        </InputNome>

        <InputUsuario>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' variant='filled' color='gray.300' placeholder='Nome de Usuário'/>
        </InputGroup>
        </InputUsuario>

        <InputEmail>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' variant='filled' color='gray.300' placeholder='Email'/>
        </InputGroup>
        </InputEmail>

        <InputSenha>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' hoover='#262D34' variant='filled' color='gray.300' placeholder='Senha' />
        </InputGroup>
        </InputSenha>

        <InputConfirmarSenha>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' variant='filled' color='gray.300' placeholder='Confirmar Senha' />
        </InputGroup>
        </InputConfirmarSenha>
    </ChakraProvider>
    </>
    )
}

export default InputCadastro