import { Link } from "react-router-dom";
import { Loading, LoadingDiv } from "./LoadingDiv";
import { isMobile } from "react-device-detect";

function LiAElement(props) {
  return (
    <li className={!isMobile ? "p-1 w-48" : "p-1"}>
      <Link
        to={
          "/Search/" +
          Loading(props.type, true) +
          (!props.toProps ? props.src : "")
        }
        className="mt-2 bg-base-300 hover:bg-base-100"
      >
        {props.src}
      </Link>
    </li>
  );
}

export default LiAElement;
