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
    title: "Research Assistant",
    company: "University of Waterloo",
    description: `Under the mentorship of Professor Diogo Barradas, I developed a web application using Typescript and Next.js
     to visualisize data censorship activities from around the world. The project is a joint initiative with researchers from 
  Carnegie Mellon and UMass Amherst to collect and report censorship data using DNS Manipulation, TCP Packet Injection, 
  and Block Page Detection.`,
    link: "https://cs.uwaterloo.ca/",
    color: "border-amber-500",
    underline: "decoration-amber-500",
  },
  {
    title: "Data Scientist Intern",
    company: "Geotab",
    description: `During my internship at Geotab, I specialized in developing dynamic KPI dashboards using Python, SQL, and 
    Apache Superset to monitor over 4 million hardware devices. These dashboards were instrumental in identifying future investment
     trends, creating new flagship products, and uncovering customer discovery opportunities.`,
    link: "https://www.geotab.com/",
    color: "border-pink-600",
    underline: "decoration-pink-600",
  },
  {
    title: "Software Developer Intern",
    company: "Searchspring",
    description: `At Searchspring, I worked with Typescript and Vue to develop Searchspring's client facing platform. Additionally, 
    I migrated their database architecture from MySQL to AWS Redshift using Golang, PHP, and SQL.`,
    link: "https://searchspring.com/",
    color: "border-green-600",
    underline: "decoration-green-600",
  },
];

export default function Work() {
  return (
    <div id="work" className="flex flex-col p-8 sm:p-12 gap-8">
      <p className="font-semibold text-3xl text-center">Work Experience</p>
      <div className="flex flex-col gap-8 md:flex-row justify-center">
        {experiences.map((ex) => (
          <div
            key={ex.company}
            className={`m-2 border-solid rounded-lg ${ex.color} border-4 p-4 w-[320px]`}
          >
            <p className="font-semibold text-xl">{ex.title} @ </p>
            <p
              className={`font-semibold text-xl mb-2 underline underline-offset-4 ${ex.underline}`}
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
