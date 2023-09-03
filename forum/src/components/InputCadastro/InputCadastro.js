
import { ChakraProvider } from '@chakra-ui/react'
import {
    Input,
    InputGroup,
  } from "@chakra-ui/input"
import { InputStyle } from './InputCadastro.jsx'


function InputCadastro(){
    return(
    <>
    <ChakraProvider>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Nome Completo'/>
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Nome de Usuário'/>
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Email'/>
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Senha' />
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Confirmar Senha' />
        </InputGroup>
        </InputStyle>
    </ChakraProvider>
    </>
    )
}

export default InputCadastro