import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Post author="Paulo Sarmento" content="lorem ipsum dolor sit amet" />
      <Post author="Paulo Júnior" content="Um post bem legal" />
    </>
  );
}
