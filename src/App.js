import { Banner } from "./Banner";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Mailing } from "./Components/Mailing";
import { Post } from "./Components/Posts";
import "./style.css"
import "../src/Components/Responsive.css"

function App() {
  return (
    <>
      <Banner />
      <Header />
      <Post />
      <Mailing/>
      <Footer />
    </>
  );
}

export default App;
