/** @jsx jsx */
import { jsx, Heading, Box, Container, Text } from 'theme-ui';
import { Link } from 'components/link';
import menuItems from './footer.data';
import BannerBG from 'assets/bannerBg.png';
export default function Footer() {
  return (
    <footer id= "footer" sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          {menuItems.map(({ header, items }, i) => (
            <Box sx={styles.footer.menus} key={i}>
              <Heading sx={styles.footer.heading}>{header}</Heading>
              <nav>
                {items.map(({ path, label }, i) => (
                  <Link
                    path={path}
                    key={i}
                    label={label}
                    sx={styles.footer.link}
                  />
                ))}
              </nav>
            </Box>
          ))}
        </Box>
      </Container>
      <Text sx={styles.footer.copyright}>
        All right reserved - Design & Developed by SelectricGo
      </Text>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'black',
    container: {
    //   backgroundImage: `url(${BannerBG})`,
    // backgroundRepeat: `no-repeat`,
    // backgroundPosition: 'top left',
    // backgroundSize: 'cover',
      backgroundColor: 'black',
      //background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(11,68,75,1) 50%, rgba(0,0,0,1) 100%)',
      width: '100%',
      alignItems: 'stretch',
    },
    footerTopArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      flexWrap: 'wrap',
      pt: [7, null, 8],
      pb: ['10px', null, null, '20px'],
      px: [0, null, null, null, 4],
    },
    menus: {
      width: ['50%', null, null, '25%'],
      display: 'flex',
      flexDirection: 'column',
      mb: ['40px', null, null, '60px'],
    },

    heading: {
      fontSize: [3, null, null, 4],
      color: 'white',
      fontWeight: '500',
      mb: [3, 4, 5, null, 6],
      lineHeight: '1.35',
    },

    link: {
      fontSize: ['14px', null, 1],
      color: 'text',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ':hover': {
        color: 'white',
      },
      ':last-child': {
        mb: '0px',
      },
    },
    copyright: {
      fontSize: ['14px', null, 1],
      width: '100%',
      textAlign: 'center',
      p: ['20px 20px'],
      backgroundColor: 'black',
      color: 'grey',
      a: {
        textDecoration: 'none',
        color: 'inherit',
        pl: 1,
        transition: 'all 0.25s',
        '&:hover': {
          color: 'primary',
        },
      },
    },
  },
};
