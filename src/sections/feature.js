/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'Optimized Route Planning',
    text:
      'The feature that enables you to plane a route for your long distance journey and travel without hassles!',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'More Charging Stations',
    text:
      'We are constantly updating our database and adding more charging stations on our web.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'IOS App',
    text:
      'Why only Android? SelectricGo will be available on Apple Store soon!',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Better User Experience',
    text:
      "We are constantly upgrading our designs and working on the user's experience.",
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Traffic',
    title: 'Live Traffic',
    text:
      'Get live information about the status of the charging station you find best for you.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Slot',
    title: 'Slot Booking',
    text:
      'Book a slot! Now get a hassle and queue free charging experience.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Upcoming Brainstormings"
          title="What's coming up next?"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      
    ],
  },
};
