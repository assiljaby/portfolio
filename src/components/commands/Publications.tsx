import { Wrapper } from "../styles/Output.styled";
import { ProjectContainer, ProjectDesc, ProjectsIntro, ProjectTitle } from "../styles/Projects.styled";
import { Link } from "../styles/Welcome.styled";

const Publications: React.FC = () => {
    return (
        <Wrapper>
            <ProjectsIntro>
                    These are the results of my research in the medical field <br /> 
                    using Artificial Intelligence solutions.
            </ProjectsIntro>
            {projects.map(({ id, title, desc, url }) => (
            <ProjectContainer key={id}>
                <ProjectTitle>&gt; {`${title}`}</ProjectTitle>
                <ProjectDesc>{desc}</ProjectDesc>
                {url && 
                <ProjectDesc>
                    You can find the Paper <Link href={url} target="_blank">here</Link>.
                </ProjectDesc>}
            </ProjectContainer>
            ))}
        </Wrapper>
    )
};

const projects = [
    {
      id: 1,
      title: "ASD-EVNet: An Ensemble Vision Network based on Facial Expression for Autism Spectrum Disorder Recognition",
      desc: "Innovative AI model ASD-EVNet uses 3 Vision Transformers and facial expression analysis to accurately diagnose Autism Spectrum Disorder in children, outperforming existing methods by 25% through ensemble learning and a novel facial expression dataset including 7921 images.",
      url: "https://ieeexplore.ieee.org/abstract/document/10215688",
    },
    {
      id: 2,
      title: "Audio Speech Signal Analysis for Early Autism Spectrum Disorder Detection",
      desc: "Innovative deep learning approach using Swin transformer of 3 billion parameters and CNN trained on 1000+ audio samples to detect Autism Spectrum Disorder, oﬀering a screening tool with an accuracy of over 90% in distinguishing ASD from typically developing children.",
      url: "https://ieeexplore.ieee.org/document/10296783",
    },
  ];

export default Publications;