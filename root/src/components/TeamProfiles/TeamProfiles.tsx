import styles from "./TeamProfiles.module.css";

const TeamProfiles = () => {
  // Team data (can be fetched from an API or database)
  const team = [
    {
      name: "Orlando Diggs",
      role: "Backend Developer",
      subtitle: "Lead Backend Dev",
      image: "https://via.placeholder.com/285x236", // Replace with actual image URL
    },
    {
      name: "Mary Duke",
      role: "Frontend Developer",
      subtitle: "Lead Frontend Dev",
      image: "https://via.placeholder.com/285x236", // Replace with actual image URL
    },
    {
      name: "Mathew Lewis",
      role: "Engineering Manager",
      subtitle: "Leading Engineering Team",
      image: "https://via.placeholder.com/285x236", // Replace with actual image URL
    },
  ];

  return (
    <section className={styles.team}>
      {/* Team Header */}
      <h2 className={styles.teamTitle}>Team</h2>

      {/* Profiles Grid */}
      <div className={styles.profiles}>
        {team.map((member, index) => (
          <div className={styles.profileCard} key={index}>
            <img
              src={member.image}
              alt={`${member.name} Profile`}
              className={styles.profileImage}
            />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.subtitle}>{member.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamProfiles;
