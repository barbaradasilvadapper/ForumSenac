import StyledGlobal from "./StyledGlobal";
import { ChakraProvider } from '@chakra-ui/react'
import Rotas from "./routes/Routes";

function App() {
  return (
    <>
    <StyledGlobal />
    <ChakraProvider>
      <Rotas/>
    </ChakraProvider>
    </>
  );
}

export default App;