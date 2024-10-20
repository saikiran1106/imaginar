// src/components/TeamProfiles/TeamProfiles.tsx
import styles from "./TeamProfiles.module.css";

const TeamProfiles = () => {
  return (
    <section className={styles.team}>
      <h2>Team Profiles</h2>
      <p>Subtitle goes here</p>
      <div className={styles.profiles}>
        <div className={styles.profile}></div>
        <div className={styles.profile}></div>
        <div className={styles.profile}></div>
        <div className={styles.profile}></div>
        <div className={styles.profile}></div>
      </div>
    </section>
  );
};

export default TeamProfiles;
