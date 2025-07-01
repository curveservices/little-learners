import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import ReactModal from "react-modal";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";

// Set your app element for accessibility
ReactModal.setAppElement("#root");

const TestimonialCard = ({ testimonial }) => {
  const textRef = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el && el.scrollHeight > el.clientHeight) {
      setShowReadMore(true);
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="testimonial">
      <h3 className="name subtitle">{testimonial.name}</h3>
      <div className="text-container">
        <p className="text">{testimonial.text}</p>
      </div>
      <button onClick={() => setIsModalOpen(true)} className="read-more-btn">
        Read More
      </button>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Full Testimonial"
        className="testimonial-modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-modal-btn">
          <FontAwesomeIcon icon={faClose} size="x1" />
        </button>
        <div className="testimonial">
          <h3 className="name subtitle">{testimonial.name}</h3>
          <p className="text">{testimonial.text}</p>
        </div>
      </ReactModal>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "From Katie",
      text: '"I cannot recommend Little Learners highly enough. Such thoughtful preparation of all the activities is clear and I have seen evidence already that my daughter is learning valuable skills through play and fun. The leaders, Sylwia and her staff have created a happy atmosphere and the children are clearly settled and confident in their care. One happy little girl equals one happy mummy! Thank you Little Learners."',
    },
    {
      name: "From Stephanie",
      text: '"Little learners has been my 2 1/2 year old sons first play group which he does without me and he thoroughly enjoys it. In the short time he has been attending I have noticed his vocabulary expanding and his love of numbers growing every week. He is always happy when i collect him and enthusiastically tells me all about the singing, numbers and train playing he has been doing. I have also had a lot of feedback from Sylwia on how he is getting on, what he likes doing and what they are working on which is really reassuring. It\'s a great, gentle safe and fun playgroup."',
    },
    {
      name: "From Penny",
      text: "\"Little Learner's is perfect for my daughter of 2.5 years. Sylwia and her staff offer far more than 'childcare', the sessions are designed to be educational and Sylwia's experience as a teacher is evident in the resources she provides. Children are encouraged to be independent but also to take instruction and work/play together. It is so important for me to know that my daughter is being engaged and stretched, whilst also having a good time.\"",
    },
    {
      name: "From Frances",
      text: '"I learnt a lot at LLs and absolutely loves it. I think you\'re offering something unique in the area - a fun and supportive learning experience in a nurturing home-like environment. It deserves to be a great success!"',
    },
    {
      name: "From Bridget",
      text: "\"Having done the rounds with nurseries with my daughter I was looking for something different for my second child; Finding Little Learners was like finding the Holy Grail!! A loving, safe, fun and educational environment that offered drop off childcare; my son felt at home straight away and loves every minute that he's there. The benefits are very clear from howproud he is at showing of his learning! I feel very lucky to have found Sylwia and her team, couldn't ask for better childcare. Thank you!\"",
    },
    {
      name: "From Jaina",
      text: "\"My son loves attending Little Learners. The atmosphere is calm and friendly. The sessions are stimulating, well planned and demonstrate Sylwia's excellent understanding of the preschool curriculum. Thanks to his time at Little Learners my son is now more than ready for the transition to his school's nursery class in September. Thank you Little Learners!\"",
    },
    {
      name: "From Debbie",
      text: '"Our daughter loves Little Learners. She always runs in with excitement and enthusiasm and we are so happy we found Sylwia and team. Thank you all for creating a fun and nurturing preschool!"',
    },
    {
      name: "From Emma",
      text: "\"I wanted to write to thank everyone at Little Learners for everything they do for our little boy. Little Learners has transformed our son from someone who did not want to be left in a nursery environment to one who will happily skip in every day, a huge gift for him and for me! Any parent will empathize with how hard it is when their little one dreads nursery, cries at drop off or on the way... we had this at a previous nursery every day for over a year but since his first day at Little Learners this had never once been the case. Sylwia and her term create a warm nurturing atmosphere that is, above all, positive and caring. There is a fantastic balance between nurture and kindness but with clear boundaries and I feel our son benefits enormously from this. His participation in 'sitting and doing' activities has really improved with this mixture of enthusiasm and encouragement alongside high expectations. He has fun but also seems to absorb an incredible amount... from knowing words to all sorts of songs to telling me the missing planet in our solar system chart! The feedback we receive is absolutely invaluable, every day our key worker, will let us know how our son has got on and we get weekly updates on what the children are doing and encouragement to support and build on this at home. We had some concerns about behavior previously and these have been handled incredibly sensitively, with gentle and none judgmental advice given on how we can back up the huge improvements they have made within the nursery environment. I feel our son has also really benefitted from the smaller group sizes Little Learners can offer and the personal approac to learning. Not only does he know his teachers well but also the other children; it is so lovely to hear them all calling 'bye' to each other by name as they leave and I feel the more intimate setting really helps them to learn social skills and foster relationships. Indeed, our son has recently been for his settling in day at Prep School and they commented on his confidence, friendliness and traditional manners, all of which I would pass the credit on to Sylwia and her team for. My husband and I really could not be happier with Little Learners and we are incredibly grateful to them for their patience, positivity and personal approach. They have reframed our son's education for him but also for us - we have gone from feeling somewhat nervous about how our little boy would cope with school to feeling excited for him. I could not recommend Little Learners more highly as a happy, structured, personal and positive place to begin your child's school, social and learning life. Thank you all!\"",
    },
    {
      name: "",
      text: '"We moved our son to LL preschool last year and it was the best decision we could have made for him. It is lovely to see how he is supported and understood by all his carers. He comes home having learnt new things, talking positively about his day and the friends that he has made. We have been impressed by the activities that have been arranged for the children and the thoughtful resources that are available to keep them entertained throughout the day. We receive timely and well considered updates from the nursery and we look forward to the newsletter which summarises the activities for the week. Our son is thriving at the preschool and as parents we know that we are leaving him with people who consider his individual needs and really care for the children that they are responsible for. Amazing place, highly recommend the preschool to other parents – thank you so much.',
    },
    {
      name: "",
      text: '"Two of my children have attended Little Learners and both absolutely thrived with Sylwia and her team. It was the first setting either of them attended and they were both supported so well during the settling in period. Little Learners is an inclusive, nurturing, caring and creative setting where children are encouraged to be themselves. I feel so lucky to have found Little Learners and for my children to have spent such precious time there.',
    },
    {
      name: "",
      text: '"Little Learners is a truly magical setting, and without question, the best early years setting in London. The mature and caring staff dedicate their time to getting to know each child personally. Beyond the nurturing environment, they offer an incredible variety of activities, reading, cooking, outdoor exploration, yoga, and crafts, that spark curiosity, creativity, and joy in every little one."',
    },
    {
      name: "",
      text: "\"A has loved her time at Little Learners. One of the features we love most is the garden area, which is a really good size and rare to find in a London nursery. It's great to get lots of feedback about what the children are doing at preschool through the tapestry app, and wonderful to see lots of photos too. The staff are very caring and A has formed a lovely bond with her key worker. There are lots of fun activities as well as learning opportunities, and extra things like the lending library, mother's day cards and Christmas performances are all wonderful touches that show how much the staff do for the children.\"",
    },
    {
      name: "",
      text: '"Firstly, I just want to say thank you so much for the past 5(!) years. You have looked after both C and J so well, and we are so glad that we found you all those years ago. We started at Little Learners when C was two, and she was so small and quiet back then! I remember when it came to it and we were agonising over school choices, when all of C close friends were heading off to school nurseries and we were undecided. We stayed with Little Learners for that last year before Reception, and it made so much difference. C really blossomed: she gained so much confidence, became more outspoken, really enjoyed her last year with you. And I think it would have been so different if she had gone into a large school nursery, wonderful as many of them are. She had the space to become one of the little leaders in the preschool and it was noticeable to everyone how much she had come into herself and found her voice a bit more. I will admit that I did feel a bit anxious about whether C would be behind other children when she did start in Reception, having not been in as formal a learning environment. But when she started school she knew her numbers and letters and in no time she was reading and writing - in fact overtook a lot of her classmates. She also took the shift from such a small preschool to the enormity of a two-form Reception, with sixty children all mixing at playtime, absolutely in her stride, which I could not see her doing so successfully before she gained her confidence in her final year at Little Learners. Needless to say, we had no hesitation in keeping Joshua in with Little Learners for the full time period up to Reception. He starts school in September - and he is so ready now - but we will be very sad to leave Little Learners behind. I think that you have a really special setting, with an amazing space for the children to play in, and the attention that you are able to give each of the children makes so much difference. I believe that there&#39;s no rush whatsoever to put children into more formal learning: my children have absolutely flourished under the care and attention they have received at Little Learners. We couldn\'t have asked for any more. We wish you all the very best for the future, and will keep in touch!"',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-container">
      <div className="text-box">
        <div className="subtitle">
          <div className="indent"></div>
          what they say
        </div>
        <h2>Parent Testimonials</h2>
      </div>

      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
