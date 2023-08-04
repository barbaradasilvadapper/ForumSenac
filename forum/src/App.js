import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import StyledGlobal from "./StyledGlobal";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
    <ChakraProvider>
      <StyledGlobal />
      <Login/>
    </ChakraProvider>
    </>
  );
}

export default App;