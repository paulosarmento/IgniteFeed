import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/paulosarmento.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paulo Sarmento</strong>
              <time
                title="20 de dezembro às 9:52h"
                dateTime="2022-12-20 09:53:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
