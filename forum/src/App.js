import StyledGlobal, { Grid } from "./StyledGlobal";
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Tags from "./pages/Tags/Tags";
import MyPosts from "./pages/MyPosts/MyPosts";
import MyAnswers from "./pages/MyAnswers/MyAnswers";
import PostDetails from "./pages/PostDetails/PostDetails";
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