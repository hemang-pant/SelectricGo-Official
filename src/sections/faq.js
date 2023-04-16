/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Q1 ?',
    contents: (
      <div>
        ANS 1
      </div>
    ),
  },
  {
    title: 'Q2 ?',
    contents: (
      <div>
        ANS 2
        it acts as protection from the sunburns and insects.
      </div>
    ),
  },
  {
    title: 'Q3 ?',
    contents: (
      <div>
        Ans3
      </div>
    ),
  },
  {
    title: 'Q4 ?',
    contents: (
      <div>
        Ans4
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section id="faq" sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
