import hero from '../../assets/images/gallery-hero.webp';
import Button from '../../components/button';
import Helmet from '../../components/helmet';
import Gallery from '../../components/imageGallery';
import useScrollStates from '../../components/scrollState';
import Testimonials from "../../components/testimonials";
import './index.scss';

const GalleryPage = () => {
  const { second, third, fourth } = useScrollStates();
  return (
    <>
      <Helmet
        title="Gallery | Little Learners Preschool in Action"
        description="View our gallery and see Little Learners in action — from playtime and activities to seasonal celebrations and special events."
        keywords="preschool photos, nursery gallery, Blackheath preschool images, early years photo gallery"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Little Learners Preschool Gallery",
          url: "https://www.littlelearnersplaygroup.com/gallery",
          description:
            "A photo gallery showcasing the children and activities at Little Learners Preschool.",
        }}
      />
      <div className="gallery-page">
        <section className="hero">
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              Tiny Hands, Big Imaginations
            </div>
            <h1 className="main-title">A Joyful Look Inside</h1>
            <p>
              Discover the laughter, creativity, and learning that fill our
              days—captured in snapshots and artwork by our Little Learners.
            </p>
            <div className="btn-container">
              <Button
                text="Apply to Join Us"
                link="/Application_to_Join_April_2018.doc"
                isInternal={false}
                download={true}
              />
            </div>
          </div>
          <img
            src={hero}
            alt="Little Learners preschool in Blackheath, London"
            className="gallery-hero-image"
            loading="lazy"
          />
        </section>
        <section className={`second-section ${second ? "anim" : "none"}`}>
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              our home
            </div>
            <h2>A Peek Inside Little Learners</h2>
            <p>
              Step into our world! From colourful classrooms to our outdoor play
              area, these moments capture the joy, creativity, and discovery
              happening every day at Little Learners. We believe learning should
              be fun, hands-on, and full of smiles—and our gallery reflects just
              that.
            </p>
          </div>
          <Gallery galleryID="home" />
        </section>
        <section className={`third-section ${third ? "anim" : "none"}`}>
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              Art & design
            </div>
            <h2>Artwork by Our Little Artists</h2>
            <p>
              We're constantly amazed by the creativity and imagination of our
              children. This gallery showcases a selection of their
              artwork—paintings, drawings, and projects made with love. Every
              piece tells a story and celebrates each child's unique
              perspective.
            </p>
          </div>
          <Gallery galleryID="art" />
        </section>
        <section className="fourth-section">
          <Testimonials />
        </section>
      </div>
    </>
  );
};

export default GalleryPage;
