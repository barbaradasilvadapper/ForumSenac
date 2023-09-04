import StyledGlobal, { Grid } from "./StyledGlobal";
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Tags from "./pages/Tags/Tags";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import Like from "./pages/Like/Like";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cadastro from './pages/Cadastro/Cadastro';

function App() {
  return (
    <>
    <StyledGlobal />
    <ChakraProvider>
      <Grid>
        <Header />
        <Menu />
        <Home />
      </Grid>
    </ChakraProvider>
    </>
  );
}

export default App;