import { useState } from "react";
import Accordion from "./index";

const AccordionGroup = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  return (
    <div className="accordion-container">
      <div className="accordion-left">
        <h2 className="accordion-title">Three Prime Areas</h2>
        <Accordion
          title="Personal, Social and Emotional Development"
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          <p>Self confidence and self-awareness</p>
          <ul>
            <li>Developing a positive sense of themselves and others</li>
            <li>Confidence to try new activities </li>
            <li>Developing confidence in their own ability </li>
            <li>Expressing when help is required </li>
          </ul>
          <p>Managing feelings and behaviour</p>
          <ul>
            <li>Understanding and following rules </li>
            <li>Dealing with feelings </li>
            <li>Good manners</li>
          </ul>
          <p>Making relationships</p>
          <ul>
            <li>Forming relationships with adults and children</li>
            <li>Taking turns</li>
          </ul>
          <p>Seasons</p>
          <p>Autumn</p>
          <ul>
            <li>Settling in</li>
            <li>Rules of Little Learners</li>
            <li>Sharing</li>
            <li>Forming frienships</li>
            <li>Bonfire night</li>
            <li>Diwali</li>
            <li>Harvest festival</li>
            <li>Christmas</li>
          </ul>
          <p>Spring</p>
          <ul>
            <li>Gaining independence</li>
            <li>People around us</li>
            <li>Chinese New Year</li>
            <li>Valentines's Day</li>
            <li>Mother's Day</li>
            <li>Easter</li>
          </ul>
          <p>Summer</p>
          <ul>
            <li>Father's Day</li>
            <li>Deeling with feelings</li>
            <li>Understanding the consequences of words and actions</li>
          </ul>
        </Accordion>
        <Accordion
          title="Communication and Language"
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        >
          <p>Listening and attention</p>
          <ul>
            <li>Learning to listen in a range of situations</li>
            <li>
              Listening and responding to: stories, poetry, rhymes,
              show-and-tell
            </li>
          </ul>
          <p>Understanding</p>
          <ul>
            <li>Following instructions</li>
            <li>Answering “how, why” in response to stories and events</li>
          </ul>
          <p>Speaking</p>
          <ul>
            <li>Gaining confidence with speech</li>
            <li>Extending vocabulary</li>
            <li>Using language to express feelings and ideas</li>
          </ul>
        </Accordion>
        <Accordion
          title="Physical Development"
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        >
          <p>Moving and handling</p>
          <ul>
            <li>Demonstrate fine motor skills</li>
            <li>
              Handle tools, objects, construction and malleable materials safely
              and with basic control
            </li>
            <li>Awareness of body parts and space</li>
            <li>Travelling using different parts of the body</li>
            <li>Stretching and curling</li>
            <li>Hopping and jumping to music</li>
            <li>Balancing</li>
            <li>Throwing, catching and rolling balls</li>
          </ul>
          <p>Health and self-care</p>
          <ul>
            <li>Gaining confidence in dressing and undressing</li>
            <li>Awareness of eating healthy foods</li>
            <li>Understanding the importance of exercise</li>
          </ul>
        </Accordion>
      </div>
      <div className="accordion-right">
        <h2 className="accordion-title">Four Specific Areas</h2>
        <Accordion
          title="Literacy"
          isOpen={openIndex === 3}
          onToggle={() => handleToggle(3)}
        >
          <p>Reading</p>
          <ul>
            <li>Learning how to handle and enjoy books</li>
            <li>Recognising own name in print</li>
            <li>Rhyming words - poetry, nursery rhymes</li>
            <li>Introduction to phonics</li>
          </ul>
          <p>Writing</p>
          <ul>
            <li>Learning how to hold a pencil correctly</li>
            <li>Practising fine motor skills</li>
            <li>Tracing and writing names and individual letters</li>
          </ul>
        </Accordion>
        <Accordion
          title="Mathematics"
          isOpen={openIndex === 4}
          onToggle={() => handleToggle(4)}
        >
          <p>Numbers</p>
          <ul>
            <li>Counting rhymes and songs</li>
            <li>Introduction to numbers 0-10</li>
            <li>Experience of writing numbers 0-10</li>
            <li>Sorting and sets</li>
            <li>Puzzles</li>
          </ul>
          <p>Shape, space and measure</p>
          <ul>
            <li>RColour, shape, size, position - mathematical vocabulary</li>
            <li>Sorting, comparing and matching objects</li>
            <li>Introduction to patterns</li>
            <li>Days of the week</li>
          </ul>
        </Accordion>
        <Accordion
          title="Understanding the World"
          isOpen={openIndex === 5}
          onToggle={() => handleToggle(5)}
        >
          <p>People and communities</p>
          <ul>
            <li>Past and present events</li>
            <li>
              Developing an awareness of special occasions within cultures
            </li>
            <li>
              Stories and symbols associated with festivals and celebrations
            </li>
          </ul>
          <p>The world</p>
          <ul>
            <li>
              Learning to observe, explore and question the world around us
            </li>
            <li>
              Learning about the world around us through play and by
              experiencing a wide range of materials – sand, water, playdough
            </li>
          </ul>
          <p>Technology</p>
          <ul>
            <li>Using technology to support learning</li>
          </ul>
        </Accordion>
        <Accordion
          title="Expressive Arts and Design"
          isOpen={openIndex === 6}
          onToggle={() => handleToggle(6)}
        >
          <p>Exploring and using media and materials</p>
          <ul>
            <li>Using a range of media to express ideas</li>
            <li>Painting and drawing</li>
            <li>Music and movement</li>
          </ul>
          <p>Being imaginative</p>
          <ul>
            <li>Role play</li>
            <li>Imaginative play</li>
            <li>Storytelling</li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionGroup
