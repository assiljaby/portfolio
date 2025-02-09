import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { Link } from "../styles/Welcome.styled";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc, url }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>&gt; {`${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
          {url && 
            <ProjectDesc>
              More details in the <Link href={url} target="_blank">Github Repo</Link>.
            </ProjectDesc>}
        </ProjectContainer>
      ))}
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "OXT-Helper | Full-Stack Support Management Platform",
    desc: "Independently initiated and developed a comprehensive dashboard as a side project during oﬀ-hours, using Next.js, PostgreSQL, and shadcn/ui to help support managers monitor team metrics, manage agent rosters, and coordinate shifts.",
  },
  {
    id: 2,
    title: "Chat Shift Monitor",
    desc: "Architected a Go-powered shift monitoring solution integrated with Zendesk API and Slack notifications, improving the performance of a support team of 100+ agents. Achieved 80% reduction in agent tardiness and 35% increase in team availability through real-time tracking and automated alerts.",
  },
  {
    id: 3,
    title: "Traffic Toll Calculator | Microservices",
    desc: "Engineered a high-performance micro services system that enhanced logistics toll processing by 40% through advanced Go-based architecture. Utilized Kafka and gRPC to optimize inter-service communication, reducing processing latency by 60% compared to legacy systems.",
    url: "https://github.com/assiljaby/trafic-toll-calculator",
  },
  {
    id: 4,
    title: "GOtel Reservations (got the pun?)",
    desc: "This project is a RESTful API server built for managing hotel reservations, leveraging Go for backend services and MongoDB for data storage. The system is designed to handle the entire reservation lifecycle, from room availability checks to booking confirmations.",
    url: "https://github.com/assiljaby/gotel-reservation",
  },
];

export default Projects;
