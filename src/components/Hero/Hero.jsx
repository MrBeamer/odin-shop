import hero from "../../assets/hero.mp4";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <video
        className={styles.heroVideo}
        src={hero}
        type="video/mp4"
        autoPlay
        loop
        playsInline
        muted
      ></video>
    </>
  );
}
