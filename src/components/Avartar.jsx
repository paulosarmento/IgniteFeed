import styles from "./Avatar.module.css";

export function Avartar({hasBorder= true, src}) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
