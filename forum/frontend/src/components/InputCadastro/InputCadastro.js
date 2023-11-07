import { useState } from "react"
import { ChakraProvider } from '@chakra-ui/react'
import {
    Input,
    InputGroup,
  } from "@chakra-ui/input"
import { InputStyle, BotaoConfirmar } from './InputCadastro.jsx'
import { Button } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";
import { api, baseUrl } from "../../services/api";
import axios from "axios";

function InputCadastro(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmSenha: ""
    });

    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.senha !== formData.confirmSenha){
            alert("Senhas não coincidem")
        } else{
            const response = await api.post(`/user/create`, formData);

            if(response.data.success) {
                alert('Usuario cadastrado')
                navigate('/')
            } else {
                alert('Não foi possivel cadastrar');
            }
              
        }

        setFormData({
            nome: "",
            email: "",
            senha: "",
            confirmSenha: ""
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return(
    <>
    <ChakraProvider>
    <form onSubmit={handleSubmit}>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Nome de Usuário'
            id="nome"
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required/>
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Email'
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required/>
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Senha' 
            id="senha"
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required/>
        </InputGroup>
        </InputStyle>

        <InputStyle>
        <InputGroup>
            <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' placeholder='Confirmar Senha' 
            id="confirmSenha"
            type="password"
            name="confirmSenha"
            value={formData.confirmSenha}
            onChange={handleChange}
            required/>
        </InputGroup>
        </InputStyle>

        <BotaoConfirmar>
                <Button borderRadius='20' colorScheme='pink' size='md' variant='solid' type='submit'>  Confirmar  </Button>
        </BotaoConfirmar>
    </form>
    </ChakraProvider>
    
    </>
    )
}

export default InputCadastro