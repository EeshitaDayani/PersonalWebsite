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
      "NewsCloud revolutionizes news consumption with a 3D word sphere displaying color-coded headlines.",
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
  {
    title: "Connections",
    description:
      "My take on NYT's Connections!",
    link: "https://connections-lemon.vercel.app/",
    color: "border-yellow-500",
    underline: "decoration-yellow-500",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col gap-8 p-8 pt-0 sm:p-12 sm:pt-0">
      <p className="font-semibold text-3xl text-center">Technical Projects</p>
      <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap justify-center items-center sm:items-stretch">
        {projects.map((p) => (
          <div
            key={p.link}
            className={`border-solid rounded-lg ${p.color} border-4 p-4 w-[320px] flex flex-col justify-between min-w-[320px]`}
          >
            <p className="font-semibold text-xl mb-2 text-center">{p.title}</p>
            <p>{p.description}</p>
            <p
              className={`cursor-pointer text-md mt-2 underline underline-offset-4 ${p.underline} w-20 self-center`}
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
    </div>
  );
}
