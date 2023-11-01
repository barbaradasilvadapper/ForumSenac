import { Input, InputGroup } from "@chakra-ui/input"
import { InputUsuario, InputSenha, StyleCheckbox, InputContainer, BotaoEntrar } from './StyledRegisterLoginInput'
import { Checkbox } from '@chakra-ui/react'
import { useState } from "react"


import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/api";
import axios from "axios";


function RegisterLoginInput(){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        senha: ""
    });

    const goToHome = () =>{
        navigate('/home')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${baseUrl}/auth/login`, formData)
            .then(function (response) {
                console.log(response)
                localStorage.setItem('user', response.data.data[0].id)
                localStorage.setItem('token', response.data.data[0].token)
                alert(response.data.message)
                goToHome()
            })
            .catch(function (error) {
                alert(error.response.data.msg)
            });

        setFormData({
            email: "",
            senha: "",
        })
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
      <form onSubmit={handleSubmit}>
          <InputContainer>
              <InputUsuario>
              <InputGroup>
                  <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' id="email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email' 
                        required/>
              </InputGroup>
              </InputUsuario>

              <InputSenha>
              <InputGroup>
                  <Input background='#262D34' borderRadius='20' border='#262D34' variant='outline' color='gray.300' id="senha"
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        placeholder='Senha' 
                        required/>
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