import styles from "@/styles/projects.module.css";

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "NewsCloud",
    description:
      "NewsCloud revolutionizes news consumption with a captivating 3D word sphere, providing an intuitive way to explore trending global headlines.",
    link: "https://news-cloud-v2.vercel.app/",
  },
  {
    title: "Retain",
    description:
      "Retain is a learning tool motivated by the protégé effect, targeted towards non-visual learners.",
    link: "https://github.com/EeshitaDayani/retain",
  },
  {
    title: "Ceres",
    description:
      "Ceres connects users with local food establishments offering discounted leftover packaged food through text alerts.",
      link: "https://github.com/EeshitaDayani/ElleHacks23"
  },
  {
    title: "PhysioKinetic",
    description:
      "PhysioKinetic offers real-time audio guidance and seamless workout control for physiotherapy patients via voice commands.",
      link: "https://github.com/CalderWhite/Hack-the-North-2022"
  },
  {
    title: "Nostalgeo",
    description:
      "Nostalgeo fosters connections by notifying users of shared nostalgic memories and experiences nearby.",
      link: "https://nostalgeo.vercel.app/"
  },
];

export default function Projects() {
  return (
    <div className={styles.projects}>
      <p id={styles.title}>PROJECTS</p>
      {projects.map((p, index) => (
        <div key={index} className={styles.card}>
          <p className={styles.heading}>{p.title}</p>
          <p className={styles.description}>{p.description}</p>
          <button
            className={styles.explore}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = p.link;
            }}
          >
            Explore
          </button>
        </div>
      ))}
    </div>
  );
}
