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
        description="Telegraph Hill Tutoring, I provide private tutoring for key stage 1 and 2 and 11 plus prep"
        keywords="Private tutor, private lessons, 11 plus, key stage 1, key stage 2, South-east London, London"
      />
    </>
  );
};

export default NotFound;
