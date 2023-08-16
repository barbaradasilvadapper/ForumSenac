import StyledGlobal from "./StyledGlobal";
import Home from "./pages/Home/Home";
import Tags from "./pages/Tags/Tags";
import MyPosts from "./pages/MyPosts/MyPosts";
import MyAnswers from "./pages/MyAnswers/MyAnswers";
import PostDetails from "./pages/PostDetails/PostDetails";

function App() {
  return (
    <>
      <StyledGlobal />
      <PostDetails />
    </>
  );
}

export default App;