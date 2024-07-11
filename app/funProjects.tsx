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
    title: "Mashed Potatoes",
    description: "Slice-of-life short story about the dysfunctional Smith family.",
    link: "https://docs.google.com/document/d/1QxO21akWRg6y_4RF5t0UeCFoYBm_oqu2/edit?usp=sharing&ouid=111826500620447735057&rtpof=true&sd=true",
    color: "border-lime-500",
    underline: "decoration-lime-500",
  },
  {
    title: "The Perfect Shade of Yellow",
    description:
      "Poem about an artist searching for the most perfect shade of yellow",
    link: "https://docs.google.com/document/d/1Y21UQ6rFPQoYgSImJuw3MawelhD5lSxJN3cKOvUliSY/edit?usp=sharing",
    color: "border-orange-500",
    underline: "decoration-orange-500",
  }
];

export default function FunProjects() {
  return (
    <div id="fun-projects" className="flex flex-col gap-8 p-8 pt-0 sm:p-12 sm:pt-0">
      <p className="font-semibold text-3xl text-center">Fun Projects</p>
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
