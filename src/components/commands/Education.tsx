import { EduIntro, EduList } from "../styles/Education.styled";
import { Cmd } from "../styles/Help.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here you can find my Academic background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">&emsp;&gt; {title}</div>
          <div className="desc">&emsp;&emsp; {desc}</div>
        </EduList>
      ))}
      <p>
        To learn about my academic publications, <br />
        Try the `<Cmd>publications</Cmd>` command.
      </p>
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc in Mathematical and Computer Sciences",
    desc: "Ibn Zohr University | 2018 ~ 2021",
  },
  {
    title: "Master's in Artificial Intelligence Engineering",
    desc: "Bahcesehir University | 2021 ~ 2023",
  },
];

export default Education;
