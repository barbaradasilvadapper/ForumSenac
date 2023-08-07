import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import StyledGlobal from "./StyledGlobal";
import Cadastro from './pages/Cadastro/Cadastro';

function App() {
  return (
    <>
    <ChakraProvider>
      <StyledGlobal />
      <Cadastro/>
    </ChakraProvider>
    </>
  );
}

export default App;