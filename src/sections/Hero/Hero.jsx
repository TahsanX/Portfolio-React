import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/main2.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import Tahsan_Zahid from '../../assets/Tahsan Zahid.pdf';
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Tahsan
          <br />
          Zahid
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href="https://github.com/TahsanX" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={Tahsan_Zahid} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
