import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>guest</User>@<WebsiteName>terminal.assiljaby.zsh</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
