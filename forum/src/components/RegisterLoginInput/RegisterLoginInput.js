import { Input, InputGroup } from "@chakra-ui/input"
import { InputUsuario, InputSenha, StyleCheckbox, InputContainer } from './StyledRegisterLoginInput'
import { Checkbox } from '@chakra-ui/react'


function RegisterLoginInput(){
    return(
    <>
    <InputContainer>
        <InputUsuario>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Email ou Nome de Usuário'/>
        </InputGroup>
        </InputUsuario>

        <InputSenha>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Senha' />
        </InputGroup>
        </InputSenha>

        <StyleCheckbox>
            <Checkbox colorScheme='blue' defaultChecked>Lembre-se de mim</Checkbox>
        </StyleCheckbox>
    </InputContainer>

    </>
    )
}

export default RegisterLoginInput;