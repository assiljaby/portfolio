import { Wrapper } from "../styles/Output.styled";
import { ProjectContainer, ProjectDesc, ProjectsIntro, ProjectTitle } from "../styles/Projects.styled";

const Skills: React.FC = () => {
    return(
        <Wrapper>
            <ProjectsIntro>
                Here are skills and tech that I use or would love to use.
            </ProjectsIntro>
            {skills.map(({ title, desc }) => (
            <ProjectContainer key={title}>
                <ProjectTitle>&gt; {`${title}`}</ProjectTitle>
                <ProjectDesc>{desc}</ProjectDesc>
            </ProjectContainer>))}
        </Wrapper>
    )
};

const skills = [
    {
      title: "Frontend Related Skills",
      desc: "HTML, CSS, Js, Typescript, Tailwind, shadcn/ui, React.js, Next.js, Svelte, Webpack, Vite",
    },
    {
      title: "Backend Related Skills",
      desc: "Go, Typescript, Node.js, CQRS, Microservices, gRPC, SQL, AWS, Docker, Java, git, Prometheus, Grafana, System Design, Messaging brokers, Jest",
    },
    {
      title: "AI Related Skills",
      desc: "Python, Sklearn, Pytorch, Tensorflow, Computer vision",
    },
    {
      title: "Skills I am Interested in Learning",
      desc: "Rust, NLP, LLMs, RAG, Scala, Functional Programming, Haskell, Lang Chain",
    },
  ];

export default Skills;