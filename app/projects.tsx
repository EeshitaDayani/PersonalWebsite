"use client";

type Project = {
  title: string;
  description: string;
  link: string;
  color: string;
  underline: string;
};

const projects: Project[] = [
  {
    title: "NewsCloud",
    description:
      "NewsCloud revolutionizes news consumption with a captivating 3D word sphere, providing an intuitive way to explore trending global headlines.",
    link: "https://news-cloud-v2.vercel.app/",
    color: "border-lime-500",
    underline: "decoration-lime-500",
  },
  {
    title: "Retain",
    description:
      "Retain is a learning tool motivated by the protégé effect, targeted towards non-visual learners.",
    link: "https://github.com/EeshitaDayani/retain",
    color: "border-orange-500",
    underline: "decoration-orange-500",
  },
  {
    title: "Ceres",
    description:
      "Ceres connects users with local food establishments offering discounted leftover packaged food through text alerts.",
    link: "https://github.com/EeshitaDayani/ElleHacks23",
    color: "border-cyan-500",
    underline: "decoration-cyan-500",
  },
  {
    title: "PhysioKinetic",
    description:
      "PhysioKinetic offers real-time audio guidance and seamless workout control for physiotherapy patients via voice commands.",
    link: "https://github.com/CalderWhite/Hack-the-North-2022",
    color: "border-rose-500",
    underline: "decoration-rose-500",
  },
  {
    title: "Nostalgeo",
    description:
      "Nostalgeo fosters connections by notifying users of shared nostalgic memories and experiences nearby.",
    link: "https://nostalgeo.vercel.app/",
    color: "border-purple-500",
    underline: "decoration-purple-500",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col gap-8 p-8">
      <p className="font-semibold text-3xl">Projects</p>
      {projects.map((p) => (
        <div
          key={p.link}
          className={`m-2 border-solid rounded-lg ${p.color} border-4 p-4`}
        >
          <p className="font-semibold text-xl mb-2">{p.title}</p>
          <p>{p.description}</p>
          <p
            className={`text-md mt-2 text-center underline underline-offset-4 ${p.underline}`}
            onClick={(e) => {
              e.preventDefault();
              const win = window.open(p.link, "_blank");
              if (win != null) {
                win.focus();
              }
            }}
          >
            EXPLORE
          </p>
        </div>
      ))}
    </div>
  );
}