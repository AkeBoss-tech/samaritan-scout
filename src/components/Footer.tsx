import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {
  Container,
  Grid,
  IconButton,
  Stack,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MaterialTheme from './MaterialTheme';

function Copyright() {
  return (
    <Stack
      flexDirection={{
        xs: 'column',
        sm: 'row',
        md: 'row',
        lg: 'row',
        xl: 'row',
      }}
      color='white'
    >
      <Typography variant='body2'>
        {'Copyrights © '}
        {new Date().getFullYear()}{' '}
        <Link
          color='inherit'
          href='https://samaritanscout.org/'
          sx={{
            textDecoration: 'none',
            ':hover': { color: 'white' },
          }}
        >
          Samaritan Scout,&nbsp;
        </Link>
      </Typography>
      <Typography variant='body2'>
        a 501(c)(3) organization. EIN: 92-3607846
      </Typography>
    </Stack>
  );
}

const socialMediaLinks = [
  {
    icon: InstagramIcon,
    url: 'https://www.instagram.com/your-instagram-page',
    color: '#ff1bb7',
  },
  {
    icon: FacebookIcon,
    url: 'https://www.facebook.com/your-facebook-page',
    color: '#82c8f7',
  },
  {
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/your-linkedin-profile',
    color: '#3c6292',
  },
  {
    icon: YouTubeIcon,
    url: 'https://youtube.com/your-youtube-profile',
    color: '#ff0000',
  },
];

function SocialMediaIcons() {
  return (
    <Stack direction='row' spacing={4}>
      {socialMediaLinks.map((link) => (
        <IconButton
          key={link.url}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          color='primary'
          sx={{
            color: 'white',
            '&:hover': { color: link.color },
            padding: 0,
          }}
        >
          <link.icon sx={{ fontSize: 32 }} />
        </IconButton>
      ))}
    </Stack>
  );
}

function Footer() {
  interface SiteMap {
    [key: string]: { label: string; link: string }[];
  }

  const siteMap: SiteMap = {
    Volunteer: [
      { label: 'With Samaritan Scout', link: '/' },
      { label: 'Remotely', link: '/' },
      { label: 'Near You', link: '/' },
    ],
    About: [
      { label: 'Our Plan', link: '/about' },
      { label: 'Our Team', link: '/people' },
    ],
    'Learn More': [
      { label: 'Contact Us', link: '/contact' },
      { label: 'Privacy Policy', link: '/' },
      { label: 'Terms of Use', link: '/' },
    ],
  };

  const theme = MaterialTheme;
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <ThemeProvider theme={MaterialTheme}>
      <div
        style={{
          width: '100%',
          backgroundColor: `${theme.palette.primary.main}`,
          color: 'white',
        }}
      >
        <Container maxWidth='lg'>
          <Stack spacing={4} py={5} px={{ sm: 0, md: 5, lg: 5, xl: 0 }}>
            {/* Title, Slogan and Donation button */}
            <Stack
              spacing={{ xs: 5, sm: 5 }}
              direction={{
                xs: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
              }}
              justifyContent={'space-between'}
              alignItems={{
                xs: 'center',
                sm: 'center',
                md: 'flex-start',
                lg: 'flex-start',
                xl: 'flex-start',
              }}
            >
              <Stack
                width={{
                  xs: '280px',
                  sm: '470px',
                  md: '345px',
                  lg: '345px',
                  xl: '345px',
                }}
                spacing={3}
              >
                <Typography
                  variant='h5'
                  component={'h1'}
                  fontWeight={'bold'}
                  noWrap
                  textTransform={'uppercase'}
                  letterSpacing={2}
                  color='secondary.main'
                  alignItems={'flex-start'}
                >
                  Samaritan Scout
                </Typography>

                <Typography
                  color='#CBCFCB'
                  component={'h3'}
                  alignItems={'flex-start'}
                >
                  Leveraging cutting-edge technology to connect people with
                  nonprofit organizations, we're a search engine dedicated to
                  creating a better world for all.
                </Typography>
                <Link href='/donate'>
                <Button
                  variant='contained'
                  sx={{
                    color: 'primary.main',
                    backgroundColor: 'primary.light',
                    height: '50px',
                    maxWidth: '60%',
                    minWidth: '250px',
                    ':hover': {
                      backgroundColor: 'white',
                    },
                  }}
                  size='large'
                >
                  <Typography
                    variant='body1'
                    fontSize={'20px'}
                    fontWeight={'bold'}
                  >
                    Support Scout
                  </Typography>
                </Button>
                </Link>
              </Stack>

              {/* Site Map */}
              {isXs ? (
                // Phone version
                <Stack direction='row' flexWrap={'wrap'} width={'325px'}>
                  {Object.keys(siteMap).map((topic) => (
                    <Stack
                      direction='column'
                      m={2}
                      // width={'180px'}
                      spacing={2}
                      key={topic}
                    >
                      <Typography
                        variant='h6'
                        fontWeight={'bold'}
                        noWrap
                        textTransform={'uppercase'}
                      >
                        {topic}
                      </Typography>
                      <Stack direction='column' spacing={1}>
                        {siteMap[topic].map((link) => (
                          <Link
                            href={link.link}
                            key={link.label}
                            underline='hover'
                            color='#CBCFCB'
                            sx={{
                              '&:hover': { color: 'secondary.main' },
                            }}
                          >
                            <Typography
                              variant='body1'
                              color='inherit'
                              noWrap
                              sx={{
                                '&:hover': { color: 'secondary.main' },
                              }}
                            >
                              {link.label}
                            </Typography>
                          </Link>
                        ))}
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              ) : (
                // Desktop Version
                <Stack direction='row' spacing={6}>
                  {Object.keys(siteMap).map((topic) => (
                    <Stack
                      direction='column'
                      spacing={2}
                      width={'auto'}
                      justifyContent={'flex-start'}
                      key={topic}
                    >
                      <Typography
                        variant='h6'
                        fontWeight={'bold'}
                        noWrap
                        textTransform={'uppercase'}
                      >
                        {topic}
                      </Typography>
                      <Stack direction='column' spacing={1}>
                        {siteMap[topic].map((link) => (
                          <Link
                            href={link.link}
                            key={link.label}
                            underline='hover'
                            color='#CBCFCB'
                            sx={{
                              '&:hover': { color: 'secondary.main' },
                            }}
                          >
                            <Typography
                              variant='body1'
                              color='inherit'
                              noWrap
                              sx={{
                                '&:hover': { color: 'secondary.main' },
                              }}
                            >
                              {link.label}
                            </Typography>
                          </Link>
                        ))}
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              )}
            </Stack>

            {/* Outside Links and Copyright */}
            <Stack
              direction={'column'}
              spacing={2}
              alignItems={{
                xs: 'center',
                sm: 'center',
                md: 'flex-start',
                lg: 'flex-start',
                xl: 'flex-start',
              }}
            >
              <Typography
                variant='body1'
                textTransform={'uppercase'}
                noWrap
                letterSpacing={2}
              >
                Follow Us
              </Typography>
              <SocialMediaIcons />
              <Copyright />
            </Stack>
          </Stack>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Footer;
