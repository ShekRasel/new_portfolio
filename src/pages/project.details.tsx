import { useEffect, useState, type FC, type JSX } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { projects, type Projects } from "src/projects/project";

export const ProjectDetails: FC = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedProject, setSelectedProject] = useState<
    Projects | undefined
  >();
  const [imageNumber, setImageNumber] = useState<number>(0);

  const handleIncrease = () => {
    const last = selectedProject?.subImages?.length ?? 0;
    setImageNumber((prev) => (prev === last - 1 ? 0 : prev + 1));
  };

  const handleDecrease = () => {
    const last = selectedProject?.subImages?.length ?? 0;
    setImageNumber((prev) => (prev === 0 ? last - 1 : prev - 1));
  };

  useEffect(() => {
    const project: Projects | undefined = projects.find(
      (project) => project.name === slug
    );
    setSelectedProject(project);
  }, [slug]);

  // console.log(selectedProject?.subImages?.map((i)=>i))

  if (!selectedProject)
    return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:py-16 h-full">
      {/* slide section */}
      <div
        className="rounded-xl h-full flex justify-between items-center p-4 lg:p-6 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${selectedProject?.subImages?.[imageNumber]})`,
        }}
      >
        {/* left arrow */}
        <button
          className="bg-black rounded-full p-3 flex justify-center items-center text-white cursor-pointer"
          onClick={handleDecrease}
        >
          <FaChevronLeft />
        </button>

        {/* right arrow */}
        <button
          className="bg-black rounded-full p-3 flex justify-center items-center text-white cursor-pointer"
          onClick={handleIncrease}
        >
          <FaChevronRight />
        </button>
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
