
import { ChakraProvider } from '@chakra-ui/react'
import {
    Input,
    InputGroup,
    InputLeftElement
  } from "@chakra-ui/input"
import { InputStyle } from './InputLogin.jsx'
import { InputStyle2 } from './InputLogin.jsx'


function InputLogin(){
    return(
    <>
    <ChakraProvider>
        <InputStyle>
        <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
            children='@'
            background='#262D34'
            />
            <Input variant='filled' placeholder='  Email or Username'/>
        </InputGroup>
        </InputStyle>

        <InputStyle2>
        <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
            children='*'
            background='#262D34'
            />
            <Input variant='filled' placeholder='  Password' />
        </InputGroup>
        </InputStyle2>
    </ChakraProvider>
    </>
    )
}

export default InputLogin