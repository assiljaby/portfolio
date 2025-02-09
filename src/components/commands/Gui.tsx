import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "gui") {
    // window.open("https://satnaing.dev/", "_blank");
  }

  return <span>GUI is still a work in progress and probably will never see the light.</span>;
};

export default Gui;
