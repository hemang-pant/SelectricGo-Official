/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import CoreFeatureThumb from 'assets/MockupFeature.svg';
import Briefcase from 'assets/core-feature/charging.png';
import Secure from 'assets/core-feature/booking.png';
import Route from 'assets/core-feature/route.png';

const data = {
  subTitle: 'Core features',
  title: 'EV Charging and Services just got easier!',
  features: [
    {
      id: 1,
      imgSrc: Briefcase,
      altText: 'Charging Information',
      title: 'Charging Information',
      text:
        'Get information and specifications for your nearest charging station. Ease your way out of searching for the best charging station near you!',
    },
    {
      id: 2,
      imgSrc: Route,
      altText: 'Navigation',
      title: 'Navigation Assistance',
      text:
        'The App assists you to navigate through the ways and get to your selected charging station.',
    },
    {
      id: 3,
      imgSrc: Secure,
      altText: 'Slot Booking',
      title: 'Slot Booking',
      text:
        'In a hurry? Book a slot for your charging period and get the best service!',
    }
  ],
};

export default function CoreFeature() {
  return (
    <section id="features" sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
        <Image src={CoreFeatureThumb} alt="Thumbnail" />
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature isdark={false} subTitle={data.subTitle} title={data.title} />
          </Box>

          <Grid gap="15px 0" columns={1} sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Image src={item.imgSrc} alt={item.altText} sx={styles.img} />

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, 'row'],
  },
  thumbnail: {
    width: ['100%', 450, 550, 350, 500, 570],
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ['100%', 450, 550, 350, 500, 570],
    pr: [0, null, 'auto', null, null, 80],
    pl: 'auto',
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, '35px', null, '55px', 6],
    mb: [3, null, null, null, 1],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    p: ['0 0px 35px', null, null, null, '0 20px 40px', null, '0 40px 40px', 0],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    p: [
      '0 17px 20px',
      null,
      null,
      '0 0 20px',
      '20px 15px 17px',
      null,
      null,
      '25px 30px 23px',
    ],
    backgroundColor: 'white',
    borderRadius: '10px',
    transition: 'all 0.3s',
    width: ['100%', '85%', null, '100%'],
    mx: 'auto',
    '&:hover': {
      boxShadow: [
        '0px 0px 0px rgba(0, 0, 0, 0)',
        null,
        null,
        null,
        '0px 8px 24px rgba(69, 88, 157, 0.07)',
      ],
    },
  },

  img: {
    width: ['50px', null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
