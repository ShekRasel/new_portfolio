import jsLogo from "src/assets/svg/javascript.svg";
import tsLogo from "src/assets/svg/typescript.svg";
import nodeJsLogo from "src/assets/svg/nodejs.svg";
import htmlLogo from "src/assets/svg/html.svg";
import cssLogo from "src/assets/svg/css.svg";
import reactLogo from "src/assets/svg/react.svg";
import expressLogo from "src/assets/svg/express.svg";
import nextLogo from "src/assets/svg/nextjs.svg";
import postgreLogo from "src/assets/svg/Postgresql_elephant.svg.png";
import mysqlLogo from "src/assets/svg/my_sql.png";
import oracleLogo from "src/assets/svg/oracle.png";

export const Skill = () => {
  const skills = [
    { src: tsLogo, color: "#3178C6" }, // TypeScript
    { src: nodeJsLogo, color: "#68A063" }, // Node.js
    { src: cssLogo, color: "#1572B6" }, // CSS
    { src: nextLogo, color: "#FFFFFF" }, // Next.js
    { src: htmlLogo, color: "#E34F26" }, // HTML
    { src: reactLogo, color: "#61DAFB" }, // React
    { src: expressLogo, color: "#fc02da" }, // Express (black)
    { src: jsLogo, color: "#F7DF1E" }, // JavaScript
    { src: postgreLogo, color: "#336791" }, // PostgreSQL Blue
    { src: mysqlLogo, color: "#00758F" }, // MySQL Blue
    { src: oracleLogo, color: "#F80000" }, // Oracle Red
    ];

  return (
    <div className="space-y-3">
      <h1 className="text-center text-xl  lg:text-2xl font-semibold text-pink">
        Skills
      </h1>
      <h1 className="text-gray text-center text-2xl lg:text-3xl font-semibold">
        Fully comfortable with
      </h1>
      <div className="bg-black rounded-md p-4 lg:p-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 place-items-center gap-6">
        {skills.map((skill, idx) => (
        <div
          key={idx}
            className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-lg transition duration-300"
          style={{
              boxShadow: `0 0 20px ${skill.color}`, // Default glow
          }}
          onMouseEnter={(e) => {
            (
              e.currentTarget as HTMLDivElement
              ).style.boxShadow = `0 0 40px ${skill.color}`; // Stronger glow
          }}
          onMouseLeave={(e) => {
            (
              e.currentTarget as HTMLDivElement
              ).style.boxShadow = `0 0 20px ${skill.color}`; // Back to default glow
          }}
        >
          <img
            src={skill.src}
            alt="skill logo"
            className="w-12 h-12 lg:w-18 lg:h-18 object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
      </div>
    </div>
  );
};
