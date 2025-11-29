import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <span className="not-found-page-span">404 Not Found</span>
      <Link className="not-found-page-link" to="/">Back to home page</Link>
    </div>
  );
};

export default NotFoundPage;
