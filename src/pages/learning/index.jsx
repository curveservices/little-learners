import Button from '../../components/button';
import hero from '../../assets/images/learning-hero.webp';
import curriculum from '../../assets/images/curriculum.webp';
import beyond from '../../assets/images/beyond.webp';
import TextAndImage from '../../components/blurImage';
import learning1 from '../../assets/images/playing-learning.webp';
import useScrollStates from '../../components/scrollState';
import AccordionGroup from "../../components/accordion/parent";
import aboutBody from "../../assets/images/about-body.webp";
import './index.scss';
import Helmet from '../../components/helmet';


const LearningPlaying = () => {
  const {second, third, fourth,fith} = useScrollStates()
  return (
    <>
      <Helmet
        title="Learning & Playing | Little Learners Preschool Curriculum"
        description="Explore our Early Years Foundation Stage curriculum. Discover how we support your child’s growth through structured play, creativity, and positive relationships."
        keywords="EYFS curriculum, learning through play, preschool education, Little Learners curriculum, early years activities"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Preschool",
          name: "Little Learners Preschool",
          description:
            "Little Learners offers a balanced curriculum combining structured play and personalised learning for preschool children aged 2–4.",
          educationalLevel: "Preschool",
          url: "https://www.littlelearnersplaygroup.com/learning-and-playing",
        }}
      />
      <div className="learning-page">
        <section className="hero">
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              what we do
            </div>
            <h1 className="main-title">Learning and Playing</h1>
            <p>
              At Little Learners preschool we aim to give the children a sound
              foundation of understanding, skills and knowledge in three prime
              and 4 specific areas of learning.
            </p>
            <div className="btn-container">
              <Button text="Contact Us" link="/contact-us" />
            </div>
          </div>
          <img
            src={hero}
            alt="Little Learners Preschool playgroup in Blackheath, London"
            className="learning-hero-image"
            loading="lazy"
          />
        </section>
        <section className={`second-section ${second ? "anim" : "none"}`}>
          <TextAndImage
            subtitle="Teaching & learning"
            title="Happy, Homely and Vibrant"
            p1="We follow the Early Years Foundation Stage Curriculum through carefully planned, play-based sessions. Children are encouraged to explore, make choices, form friendships, and enjoy learning in both structured and small group activities."
            p2="Each child is assigned a Key Worker who provides individual support and guidance. Together with our qualified teaching team, we blend child-led and teacher-led activities to help every child reach their potential. Their learning journey is documented from day one."
            p3="We value strong connections with families and offer an open-door policy, free trial sessions, and regular updates. Parents are always welcome, and we work closely with you to ensure your child has a happy, confident start at Little Learners."
            text="apply to join"
            link="/Application_to_Join_April_2018.doc"
            isInternal={false}
            download={true}
            img={learning1}
            reverse
          />
        </section>
        <section className={`third-section ${third ? "anim" : "none"}`}>
          <div className="text-row">
            <TextAndImage
              subtitle="learning and playing"
              title="Curriculum Overview"
              p1="We offer a diverse and fun programme for 2-4 year olds that encompasses the Early Years Foundation Stage Curriculum."
              p2="All of this is underpinned by learning how to share, be considerate and show empathy towards others. Ours is a place not only of self-discovery, but also somewhere where first friendships and new bonds are formed and often blossom."
              img={curriculum}
              display={false}
              flip
            />
          </div>
          <div className="text-row">
            <TextAndImage
              subtitle="beyond the curriculum"
              title="Going Beyond"
              p1="We believe children are little sponges with a huge capacity to absorb information, given the right encouragement. This is why we like to extend our teaching beyond the curriculum. For example, we are one of very few nurseries to offer French lessons within our timetable."
              p2="We would love to see you and meet your little learner. We offer regular open mornings and offer free trial sessions, so please do get in touch."
              img={beyond}
              display={false}
              flip
            />
          </div>
        </section>
        <section className={`fourth-section`}>
          <AccordionGroup />
        </section>
        <section className="fith-section">
          <img src={aboutBody} alt="" className="about-image" loading="lazy" />
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              day to day
            </div>
            <h2>Daily Timetable</h2>
            <p>
              We have created our own curriculum to expose the children to as
              many learning opportunities as possible and to enhance the
              following:
            </p>
          </div>
          <div className="unordered-list">
            <ul>
              <li>Phonics and communication &amp; language</li>
              <li>Early Years Maths</li>
              <li>Yoga &amp; Movement</li>
              <li>Music</li>
              <li>PE and Games</li>
              <li>British Sign language BSL</li>
              <li>
                Early years writing session and Communication &amp; Language,
                Phonics
              </li>
            </ul>
            <ul>
              <li>Maths Games</li>
              <li>
                Activities to extend children's learning about understanding the
                world and personal, social &amp; emotional development, learning
                to take in turns.
              </li>
              <li>Expressive art and design</li>
              <li>Messy Play activities</li>
              <li>Board games</li>
              <li>Library</li>
            </ul>
          </div>
          <div className="timetable">
            <div className="morning">
              <ul>
                <li>
                  <b>8:30am</b> Children arrive, self - register
                </li>
                <li>
                  <b>9:00am - 10:15am</b> Key activities in small groups/
                  outdoor time, daily PE
                </li>
                <li>
                  <b>10:15am </b> Tidy up time
                </li>
                <li>
                  <b>10.20am - 10.30am</b> Carpet time, weather calendar, and
                  welcome songs
                </li>
                <li>
                  <b>10.35am - 11.00am</b> Snack time
                </li>
                <li>
                  <b>11.00am - 11.45am</b> Free play, small group child-led
                  daily activities/key worker activities
                </li>
                <li>
                  <b>12.35pm - 12.40pm</b> Tidy up time
                </li>
                <li>
                  <b>12.40pm -12.55pm</b> Carpet time, one of the following:
                  Yoga and movement, Sign Language, Maths, Phonics or Music
                </li>
                <li>
                  <b>12.55pm-1.00pm</b> Home time for morning children
                </li>
              </ul>
            </div>
            <div className="afternoon">
              <ul>
                <li>
                  <b>1.00pm</b> Lunch time
                </li>
                <li>
                  <b>1.00pm -2:00pm</b> Outdoor activities including gardening
                </li>
                <li>
                  <b>2:00pm - 3:00pm</b> Art Club, Board Games Club, Early Years
                  Writing Club or Early Years Maths Club
                </li>
                <li>
                  <b>3:00pm - 3:30pm</b> Free play
                </li>
                <li>
                  <b>3:30pm - 3:40pm</b> Story time
                </li>
                <li>
                  <b>3:55pm</b> Home time
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LearningPlaying

