import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { Cmd } from "../styles/Help.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Assil Jaby</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Full-Stack Software Engineer</HighlightAlt> with a Master's in AI.
      </p>
      <p>
        Specializing in <HighlightAlt>Golang</HighlightAlt>, <HighlightAlt>Typescript</HighlightAlt> and <HighlightAlt>Python</HighlightAlt> (AI related). <br />
        Published research in <HighlightAlt>machine learning</HighlightAlt>, <HighlightAlt>AWS Cloud Practitioner</HighlightAlt>. <br />
        Transforming complex systems for global brands like <br />
        Singapore Airlines and Samsung with innovative, scalable solutions. <br />
        Enthusiastic about <HighlightAlt></HighlightAlt>web3's transformative potential in technology. <br /> <br />

        I am passionate about software and <br />
        developing tech solutions to solve real-life problems. <br />
        I take pride in what I do. <br /><br />

        For more inforamtion about my skills and tech stack, <br />
        Try the `<Cmd>skills</Cmd>` command.
      </p>
    </AboutWrapper>
  );
};

export default About;
