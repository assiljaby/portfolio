import { Wrapper } from "../styles/Output.styled";

import GeneralOutput from "./GeneralOutput";

const LastUpdated: React.FC = () => {
    return (
        <Wrapper>
            <GeneralOutput>Feb 9, 2025 - 18:20:00UTC</GeneralOutput>
            <i>Disclamer: The author is suffering from ADHD and might've <br /> forgot to update this section.</i>
        </Wrapper>
    )
};

export default LastUpdated;