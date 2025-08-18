import "./index.scss";
import notFound from "../../assets/images/404.webp";
import Helmet from "../../components/helmet";
import Button from "../../components/button";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <h1>PAGE NOT FOUND</h1>
        <Button text="Back home" link="/" />
        <img src={notFound} alt="page not found" />
      </div>
      <Helmet
        title="Page Not Found"
      />
    </>
  );
};

export default NotFound;
