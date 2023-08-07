
import { ChakraProvider } from '@chakra-ui/react'
import {
    Input,
    InputGroup
  } from "@chakra-ui/input"
import { InputUsuario, InputSenha } from './InputLogin.jsx'
import { Checkbox } from '@chakra-ui/react'
import { StyleCheckbox } from './InputLogin.jsx'


function InputLogin(){
    return(
    <>
    <ChakraProvider>
        <InputUsuario>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' variant='filled' color='gray.300' placeholder='Email ou Nome de Usuário'/>
        </InputGroup>
        </InputUsuario>

        <InputSenha>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' variant='filled' color='gray.300' placeholder='Senha' />
        </InputGroup>
        </InputSenha>

        <StyleCheckbox>
        <Checkbox colorScheme='blue' defaultChecked>Lembre-se de mim</Checkbox>
        </StyleCheckbox>
    </ChakraProvider>

    </>
    )
}

export default InputLogin