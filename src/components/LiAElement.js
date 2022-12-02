import { Link } from "react-router-dom";

function LiAElement(props) {
  return (
    <li>
      <Link to={"/Search/" + props.type}>{props.src}</Link>
    </li>
  );
}

export default LiAElement;
