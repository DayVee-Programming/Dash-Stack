import NotFoundImage from "@/components/images/NotFoundImage";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container wrapper">
        <NotFoundImage />
        <span className="not-found-page-span">Looks like you’ve got lost….</span>
        <Link className="not-found-page-link" to="/">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
