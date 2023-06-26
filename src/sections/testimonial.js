/** @jsx jsx */
import { jsx, Container,Button, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import {
  FaTwitter,
  FaLinkedinIn,FaLinkedin
} from 'react-icons/fa';
import { Link } from 'components/link';
import Avatar1 from 'assets/testimonial/avatar1.png';
import Avatar2 from 'assets/testimonial/Tanya Cof.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/avatar4.png';
import Avatar5 from 'assets/testimonial/avatar5.png';
import Avatar6 from 'assets/testimonial/avatar6.png';

const data = [
  {
    id: 1,
    title: 'Muktanshu Mishra',
    description: 'Muktanshu oversees the technical aspects of SelectricGo. With a strong background in both technical and business development, Muktanshu brings valuable expertise to the team and is committed to creating something that benefits the cleantech industry.',
    avatar: Avatar3,
    name: 'Muktanshu Mishra',
    designation: 'Co-Founder, CTO',
    review: 4,
    link: <Link path="https://www.linkedin.com/in/muktanshu-mishra-278a85181/" target="_blank">
    <Button variant="whiteButton" aria-label="Get Started">
      <FaLinkedinIn></FaLinkedinIn>
    </Button>
  </Link>,
  },
  {
    id: 2,
    title: 'Rishabh Sharma',
    description: 'Rishabh is in charge of overseeing product development, growth, and general management at Selectricgo. With a tech background and a passion for business, Rishabh aims to make the world a better place by combining these two fields, and launching a startup',
    avatar: Avatar1,
    designation: 'Co-founder, CEO',
    review: 5,
    link: <Link path="https://www.linkedin.com/in/rishabh-sharma-924b32212/" target="_blank">
    <Button variant="whiteButton" aria-label="Get Started">
      <FaLinkedinIn></FaLinkedinIn>
    </Button>
  </Link>,
  },
  {
    id: 3,
    title: 'Tanya Sharma',
    description:'Tanya is responsible for developing marketing strategies and generating new ideas to promote SelectricGOs services via social media platforms. Tanyas vision is to enhance communication and engagement with interested customers through social channels',
    avatar: Avatar2,
    name: 'Tanya Sharma',
    designation: 'Co-founder, CMO',
    review: 5,
    link:<Link path="" target="_blank">
    <Button variant="whiteButton" aria-label="Get Started">
      <FaLinkedinIn></FaLinkedinIn>
    </Button>
  </Link>,
  },
  {
    id: 4,
    title: 'Promit Mandal',
    description:'Promit is responsible for managing the hardware team at Selectricgo. Promit has been a part of the company for over eight months and has found the journey so far to be thrilling. He looks forward to exploring more opportunities with Selectricgo.',
    avatar: Avatar4,
    name: 'Promit Mandal',
    designation: 'Hardware Lead',
    review: 4,
    link:
  <Link path="https://www.linkedin.com/in/promit-mandal-321b47207/" target="_blank">
    <Button variant="whiteButton" aria-label="Get Started">
      <FaLinkedinIn></FaLinkedinIn>
    </Button>
  </Link>,
  },
  {
    id: 5,
    title: 'Animesh Mandal',
    description:'Animesh who works as a content creator for SelectricGo. Animesh has been part of the team for over seven months now and has found the experience to be exciting and fulfilling. He is eager to continue exploring new prospects with Selectricgo.',
    avatar: Avatar5,
    name: 'Animesh Mandal',
    designation: 'Growth Lead',
    review: '4',
    link: <Link path="https://www.linkedin.com/in/animesh-mandal-6b642b20a/" target="_blank">
    <Button variant="whiteButton" aria-label="Get Started">
      <FaLinkedinIn></FaLinkedinIn>
    </Button>
  </Link>,
  },
  {
    id: 6,
    title: 'Hemang Pant',
    description: 'Hemang Pant is responsible for managing the SelectricGo app. With a strong background in app development, Hemang brings valuable expertise to the team and is constantly working on improving the app and has high expectations for SelectricGO.',
    avatar: Avatar6,
    name: 'Hemang Pant',
    designation: 'App Lead',
    review: 4,
    link: <Link path="https://www.linkedin.com/in/hemang-pant-222b7a1a3/" target="_blank">
    <Button variant="whiteButton" aria-label="Get Started">
      <FaLinkedinIn></FaLinkedinIn>
    </Button>
  </Link>,
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container>
        <SectionHeader slogan="Introducing" title="Team SelectricGo" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
            <div className="card-footer">
            
            <div className="image">
            
              <Image src={item.avatar} alt="Client Image" />
            </div>
            </div>
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.designation}>{item.designation}</Text>
              {item.link}
              <Text sx={styles.description}>{item.description}</Text>
              
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  row:{
    disp1lay: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-35px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'center',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'yellow',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        marginLeft: 'auto',
        marginRight: 'auto',
        //flexShrink: 0,
        //mr: [0, null, null, 0],
        display: 'flex',
        img: {
          width: '200px',
          height: '200px',
          alignItems: 'center',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mt: [3, null, null, '22px'],
    // mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    textOverflow: 'ellipsis',
    overflow: 'hidden', 
    //width: '160px',
    height: '14em', 
    whiteSpace: 'pre-line',
    fontSize: [1, null, null, 1],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: '#ACCEC7',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
