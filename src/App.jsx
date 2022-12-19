import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Paulo Sarmento" content="lorem ipsum dolor sit amet" />
          <Post author="Paulo Júnior" content="Um post bem legal" />
        </main>
      </div>
    </>
  );
}
