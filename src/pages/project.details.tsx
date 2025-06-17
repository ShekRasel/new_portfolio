import { type FC, type JSX } from "react";
import { useParams } from "react-router-dom";
import { projects, type Projects } from "src/projects/project";

export const ProjectDetails: FC = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();

  const selectedProject: Projects | undefined = projects.find(
    (project) => project.name === slug
  );

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:py-16 h-full">
      {/* slide section */}
      <div className="rounded-xl border-gray">
        <img
          src={selectedProject?.image}
          alt="project images"
          className="rounded-xl h-full object-cover"
        />
      </div>

      {/* detials section */}
      <div className="rounded-xl p-4 lg:p-6 text-gray space-y-4 border border-gray">
        <div className="flex gap-4 items-center text-white">
          <h1>{selectedProject?.name}</h1>
          <span className="rounded-full text-sm border-white bg-pink px-4 py-1 border">
            New
          </span>
        </div>
        <div>
          {selectedProject?.descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h1>Technology :</h1>
          {selectedProject?.technology.map((tech, index) => (
            <h2 key={index}>{tech}</h2>
          ))}
        </div>
        <div className="flex gap-2 justify-end">
          <a
            href={selectedProject?.projectLink}
            target="blank"
            className="rounded-full border px-4 py-1 border-white text-white hover:bg-pink"
          >
            Live Link
          </a>
          <a
            href={selectedProject?.projectLink}
            className="rounded-full border px-4 py-1 border-white text-white hover:bg-pink"
          >
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
};
