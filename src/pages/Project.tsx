import { motion } from "framer-motion";
import { useState, type FC, type JSX } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { PrimaryButton } from "src/components/buttons/primary.button";
import { SecondaryButton } from "src/components/buttons/secondary.button";
import { projects } from "src/projects/project";
export const Project: FC = (): JSX.Element => {
  const location = useLocation();
  const [visible, setVisible] = useState<number>(
    location.pathname == "/" ? 4 : 6
  );

  return (
    <div className="space-y-4 lg:space-y-8">
      <h1 className="text-center text-xl  lg:text-2xl font-semibold text-pink">
        Projects
      </h1>
      <h1 className="text-gray text-center text-2xl lg:text-3xl font-semibold">
        My Recent Projects
      </h1>
      {/* project details */}
      <div className="grid md:grid-cols-2 lg:px-16 gap-8 text-gray">
        {projects.slice(0, visible).map((project, index) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              ease: "easeInOut",
              duration: 0.7,
            }}
            className="bg-black rounded-lg"
            key={project.name}
          >
            <div
              style={{ backgroundImage: `url(${project.image})` }}
              className="h-56 rounded-t-lg w-full bg-cover bg-no-repeat"
            />
            {/* <img
              src={project.image}
              alt="project image"
              className="rounded-t-lg h-56 w-full object-cover"
            /> */}
            <div className="p-4 lg:p-8 space-y-4">
              <h1 className="font-semibold text-white">{project.name}</h1>
              <div>
                {project.descriptions.map((description, index) => (
                  <p key={index}>{description}</p>
                ))}
              </div>
              <Link to={`/project/${project.name}`}>
                <PrimaryButton className="text-sm flex gap-2 items-center">
                  <span>View Details</span> <FaArrowRight size={16} />
                </PrimaryButton>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* more project visible */}
      {location.pathname === "/" ? (
        <Link to="/projects" className="flex justify-center">
          <SecondaryButton
            className="!rounded-full"
            onclick={() => setVisible(projects.length)}
          >
            View More
          </SecondaryButton>
        </Link>
      ) : (
        <div>
          {visible < projects.length && (
            <div className="flex justify-center">
              <SecondaryButton
                className="!rounded-full"
                onclick={() => setVisible(projects.length)}
              >
                More Project ...
              </SecondaryButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
