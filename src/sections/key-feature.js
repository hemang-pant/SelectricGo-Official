/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import TextFeature from 'components/text-feature';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.png';
import Editing from 'assets/key-feature/editing.png';
import Speed from 'assets/key-feature/speed.png';
import PatternBG from 'assets/patternBG.png';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Vector',
    title: 'AIC-Sangam Incubated',
    text:
      'SelectricGO is incubated at AIC Sangam, one of the finest clean-tech incubators of India backed by NITI AYOG.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Designate',
    title: 'STARTUP INDIA GRANT',
    text: 'SelectricGo was able to secure a grant worth 5 Lac Rupees ad it is now a DPIIT-recognised startup.',  
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Navigate',
    title: 'DTU IIF Incubated',
    text:
      'SelectricGO has been recognised by DTU and have been successfully incubated at DTU-IIF.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={styles.workflow} id="feature">
      <Container>
      <box sx={styles.container}>
      <TextFeature
      subTitle={"Our Achievements"}
      title={"Some recognitions and inclusions"}
      description={data.description}
      btnName={data.btnName}
      btnURL={data.btnURL}
      isdark={true}
    />
    </box>
    {/*<SectionHeader
          slogan="Quality features"
          title="Meet exciting feature of app"
  />*/}
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
  container: {
    pl: [0, null, null, null, '35px', null, '55px', 6],
    mb: [3, null, null, null, 1],
    textAlign: ['center', null, null, 'center'],
  },
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
  grid: {
    px: [0, null, null, '40px', null, '10px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      'repeat(1,1fr)',
      'repeat(1,1fr)',
      'repeat(1,1fr)',
      'repeat(1,1fr)',
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
