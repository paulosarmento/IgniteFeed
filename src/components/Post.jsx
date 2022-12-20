import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>Author</div>
        <img
          className={styles.avatar}
          src="https://github.com/paulosarmento.png"
        />
        <div className={styles.authorInfo}>
          <strong>Paulo Sarmento</strong>
          <span>Web Developer</span>
        </div>

        <time title="20 de Dezembro às 00:11" dateTime="2022-20-12 00:12:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉<a href=""> jane.design/doctorcare</a>
        </p>

        <p>
          <a href=""> #novoprojeto #nlw #</a>
        </p>
      </div>
    </article>
  );
}
