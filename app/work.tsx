"use client";

type Work = {
  title: string;
  company: string;
  description: string;
  link: string;
  color: string;
  underline: string;
};

const experiences: Work[] = [
  {
    title: "Software Developer Intern",
    company: "Google",
    description: `As part of the AI Benchmarking team, I worked on evaluating the code-generation abilities of large language models by 
    building infrastructure for data curation. My intern project focused on creating a gRPC service in Go that automatically fetches code 
    samples from Git repositories, expanding the benchmarking dataset.`,
    link: "https://about.google/",
    color: "border-orange-500",
    underline: "decoration-orange-500",
  },
  {
    title: "Software Developer Intern",
    company: "Titan",
    description: `At the NYC FinTech startup, I prototyped Titan Wrapped, a year-end feature that applied clustering algorithms to create 
    personalized investment profiles and highlight financial achievements. I also developed models to predict churn and identify upsell opportunities 
    to boost customer engagement and rentention.`,
    link: "https://www.titan.com/",
    color: "border-cyan-500",
    underline: "decoration-cyan-500",
  },
  {
    title: "Research Assistant",
    company: "University of Waterloo",
    description: `Under the guidance of Professor Diogo Barradas, I developed a dynamic web application with Typescript + Next.js to visualize 
    global data censorship trends. This project focuses on collecting and reporting censorship data through techniques like DNS 
    manipulation, TCP packet injection, and block page detection.`,
    link: "https://cs.uwaterloo.ca/",
    color: "border-amber-500",
    underline: "decoration-amber-500",
  },
  {
    title: "Data Scientist Intern",
    company: "Geotab",
    description: `During my internship at Geotab, I specialized in developing interactive dashboards using Python, SQL, and Apache 
    Superset to monitor over 4 million hardware devices. These powerful dashboards were crucial in identifying future investment trends, 
    guiding the creation of new flagship products, and uncovering valuable customer discovery opportunities.`,
    link: "https://www.geotab.com/",
    color: "border-pink-600",
    underline: "decoration-pink-600",
  },
  {
    title: "Software Developer Intern",
    company: "Searchspring",
    description: `At Searchspring, I led the migration of our backend database architecture from MySQL to AWS Redshift, using Go 
    and SQL to optimize query retrieval processes and accelerate KPI report generation. Additionally, I leveraged TypeScript + Vue 
    to enhance and innovate features on our primary client-facing platform.`,
    link: "https://searchspring.com/",
    color: "border-green-600",
    underline: "decoration-green-600",
  },
];

export default function Work() {
  return (
    <div id="work" className="flex flex-col p-8 sm:p-12 gap-8">
      <p className="font-semibold text-3xl text-center">Work Experience</p>
      <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap justify-center items-center sm:items-stretch">
        {experiences.map((ex) => (
          <div
            key={ex.company}
            className={`border-solid rounded-lg ${ex.color} border-4 p-4 min-w-[320px] w-[320px]`}
          >
            <p className="font-semibold text-xl">{ex.title} @ </p>
            <p
              className={`font-semibold text-xl mb-2 underline underline-offset-4 ${ex.underline} cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                const win = window.open(ex.link, "_blank");
                if (win != null) {
                  win.focus();
                }
              }}
            >
              {ex.company}
            </p>
            <p>{ex.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
