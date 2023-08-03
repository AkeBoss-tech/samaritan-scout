import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {
  Container,
  Grid,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const theme = {
  bgColor: 'white',
  fontColor: 'black',
  fontHoverColor: '#62B16E',
  iconColor: '#273225',
  secondaryFontColor: 'gray',
};

// const theme = {
//   bgColor: '#273225',
//   fontColor: 'white',
//   fontHoverColor: '#62B16E',
//   iconColor: 'white',
// };

function Copyright() {
  return (
    <Typography variant='body2' color={theme.fontColor} align='center'>
      {'© '}
      {new Date().getFullYear()}{' '}
      <Link
        color='inherit'
        href='https://samaritanscout.org/'
        sx={{ textDecoration: 'none' }}
      >
        Samaritan Scout
      </Link>
      {', '}a 501(c)(3) organization. EIN: 92-3607846
    </Typography>
  );
}

const socialMediaLinks = [
  {
    icon: FacebookIcon,
    url: 'https://www.facebook.com/your-facebook-page',
    color: '#3b5998',
  },
  {
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/your-linkedin-profile',
    color: '#0e76a8',
  },
  {
    icon: TwitterIcon,
    url: 'https://twitter.com/your-twitter-profile',
    color: '#1da1f2',
  },
];

function SocialMediaIcons() {
  return (
    <Stack direction='row' spacing={2}>
      {socialMediaLinks.map((link) => (
        <IconButton
          key={link.url}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          color='primary'
          sx={{ color: theme.iconColor, '&:hover': { color: link.color } }}
        >
          <link.icon />
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
      { label: 'Contact Us', link: '/' },
      { label: 'Privacy Policy', link: '/' },
      { label: 'Terms of Use', link: '/' },
    ],
  };

  const theme1 = useTheme();
  const isXs = useMediaQuery(theme1.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme1.breakpoints.only('sm'));

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: theme.bgColor,
        color: theme.fontColor,
      }}
    >
      <Container maxWidth='lg'>
        <Stack spacing={2} py={5}>
          <Box>
            <Grid container spacing={2}>
              {/* Intro and Donate Button */}
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Stack
                  spacing={2}
                  alignItems={isXs || isSm ? 'center' : 'flex-start'}
                >
                  <Stack direction='row' spacing={2} alignItems={'center'}>
                    <img
                      src={'/images/lacy-dog-square.jpg'}
                      alt='logo'
                      style={{
                        display: 'block',
                        height: '45px',
                        width: 'auto',
                        borderRadius: '12px',
                      }}
                    />
                    <Typography variant='h6' fontWeight={'bold'} noWrap>
                      Samaritan Scout
                    </Typography>
                  </Stack>
                  <Box
                    width={{
                      xs: '260px',
                      sm: '440px',
                      md: '100%',
                      lg: '100%',
                      xl: '90%',
                    }}
                  >
                    <Typography color={theme.secondaryFontColor}>
                      Leveraging cutting-edge technology to connect people with
                      nonprofit organizations, we're a search engine dedicated
                      to creating a better world for all.
                    </Typography>
                  </Box>
                  <Button
                    variant='contained'
                    sx={{
                      backgroundColor: theme.fontHoverColor,
                      maxWidth: '60%',
                      minWidth: '150px',
                      ':hover': {
                        backgroundColor: '#4a8353',
                      },
                    }}
                    size='large'
                  >
                    <Typography variant='body1' fontWeight={'bold'}>
                      Donate
                    </Typography>
                  </Button>
                </Stack>
              </Grid>

              {/* Site Map */}
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                {isXs ? (
                  // Phone version
                  <Stack
                    direction='row'
                    spacing={5}
                    justifyContent={'center'}
                    pt={2}
                  >
                    {/* Left Column */}
                    <Stack direction='column' spacing={5}>
                      {/* Volunteer List */}
                      <Stack direction='column' spacing={2}>
                        <Typography variant='h6' fontWeight={'bold'} noWrap>
                          Volunteer
                        </Typography>
                        <Stack direction='column' spacing={1}>
                          {siteMap['Volunteer'].map((link) => (
                            <Link
                              href={link.link}
                              key={link.label}
                              underline='hover'
                              color='inherit'
                              sx={{
                                '&:hover': { color: theme.fontHoverColor },
                              }}
                            >
                              <Typography
                                variant='body1'
                                color='inherit'
                                noWrap
                                sx={{
                                  '&:hover': { color: theme.fontHoverColor },
                                }}
                              >
                                {link.label}
                              </Typography>
                            </Link>
                          ))}
                        </Stack>
                      </Stack>
                      {/* Learn More List */}
                      <Stack direction='column' spacing={2}>
                        <Typography variant='h6' fontWeight={'bold'} noWrap>
                          Learn More
                        </Typography>
                        <Stack direction='column' spacing={1}>
                          {siteMap['Learn More'].map((link) => (
                            <Link
                              href={link.link}
                              key={link.label}
                              underline='hover'
                              color='inherit'
                              sx={{
                                '&:hover': { color: theme.fontHoverColor },
                              }}
                            >
                              <Typography
                                variant='body1'
                                color='inherit'
                                noWrap
                                sx={{
                                  '&:hover': { color: theme.fontHoverColor },
                                }}
                              >
                                {link.label}
                              </Typography>
                            </Link>
                          ))}
                        </Stack>
                      </Stack>
                    </Stack>
                    {/* Right Column */}
                    <Stack direction='column'>
                      {/* Learn More List */}
                      <Stack direction='column' spacing={2}>
                        <Typography variant='h6' fontWeight={'bold'} noWrap>
                          About
                        </Typography>
                        <Stack direction='column' spacing={1}>
                          {siteMap['About'].map((link) => (
                            <Link
                              href={link.link}
                              key={link.label}
                              underline='hover'
                              color='inherit'
                              sx={{
                                '&:hover': { color: theme.fontHoverColor },
                              }}
                            >
                              <Typography
                                variant='body1'
                                color='inherit'
                                noWrap
                                sx={{
                                  '&:hover': { color: theme.fontHoverColor },
                                }}
                              >
                                {link.label}
                              </Typography>
                            </Link>
                          ))}
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                ) : (
                  // Desktop Version
                  <Stack
                    direction='row'
                    justifyContent={'center'}
                    spacing={{ sm: 5, md: 8, lg: 5, xl: 5 }}
                    p={{ sm: 2, md: 0, lg: 0, xl: 0 }}
                    pl={{ sm: 0, md: 0, lg: 10, xl: 15 }}
                  >
                    {Object.keys(siteMap).map((section) => (
                      <Stack
                        key={section}
                        direction='column'
                        spacing={2}
                        width={{ xl: 170, lg: 170, md: 'auto', sm: 'auto' }}
                        justifyContent={'flex-start'}
                      >
                        <Typography variant='h6' fontWeight={'bold'} noWrap>
                          {section}
                        </Typography>
                        <Stack direction='column' spacing={1}>
                          {siteMap[section].map((link) => (
                            <Link
                              href={link.link}
                              key={link.label}
                              underline='hover'
                              color='inherit'
                              sx={{
                                '&:hover': { color: theme.fontHoverColor },
                              }}
                            >
                              <Typography
                                variant='body1'
                                color='inherit'
                                noWrap
                                sx={{
                                  '&:hover': { color: theme.fontHoverColor },
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
              </Grid>
            </Grid>
          </Box>

          {/* Outside Links and Copyright */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <SocialMediaIcons />
            {/* <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              A Search Engine like no other!
            </Typography> */}
            <Copyright />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default Footer;
