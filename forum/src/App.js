import StyledGlobal, { Grid } from "./StyledGlobal";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Tags from "./pages/Tags/Tags";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import Like from "./pages/Like/Like";

function App() {
  return (
    <>
      <StyledGlobal />
      <Grid>
        <Header />
        <Menu />
        <Like />
      </Grid>
    </>
  );
}

export default App;