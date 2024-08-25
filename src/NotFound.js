import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to={"/"}>Back to homepage</Link>
    </div>
  );
};

export default NotFound;
