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
      <Link color='inherit' href='https://samaritanscout.org/'>
        SamaritanScout.org
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}A 501(C)(3) Organization. EIN: 92-3607846
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
    Discover: [
      { label: 'Volunteer Events', link: '/' },
      { label: 'Organizations', link: '/' },
    ],
    'About Us': [
      // { label: 'About Us',  link: '/', },
      { label: 'Our Plan', link: '/' },
      { label: 'Our Team', link: '/' },
      { label: 'Contact Us', link: '/' },
      { label: 'Donate', link: '/' },
    ],
    'Learn More': [
      { label: 'Contact Us', link: '/' },
      { label: 'Help & FAQ', link: '/' },
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
          <Grid container spacing={2}>
            {/* Intro and Button */}
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
                    sm: '480px',
                    md: '80%',
                    lg: '100%',
                    xl: '100%',
                  }}
                >
                  <Typography color='inherit'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </Typography>
                </Box>
                <Button
                  variant='contained'
                  style={{
                    backgroundColor: theme.fontHoverColor,
                    maxWidth: '60%',
                  }}
                  size='large'
                >
                  Contact Us
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
                    {/* Discover List */}
                    <Stack direction='column' spacing={2}>
                      <Typography variant='h6' fontWeight={'bold'} noWrap>
                        Discover
                      </Typography>
                      <Stack direction='column' spacing={1}>
                        {siteMap['Discover'].map((link) => (
                          <Link
                            href={link.link}
                            key={link.label}
                            underline='hover'
                            color='inherit'
                            sx={{ '&:hover': { color: theme.fontHoverColor } }}
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
                    {/* About Us List */}
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
                            sx={{ '&:hover': { color: theme.fontHoverColor } }}
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
                        About Us
                      </Typography>
                      <Stack direction='column' spacing={1}>
                        {siteMap['About Us'].map((link) => (
                          <Link
                            href={link.link}
                            key={link.label}
                            underline='hover'
                            color='inherit'
                            sx={{ '&:hover': { color: theme.fontHoverColor } }}
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
                  spacing={10}
                  justifyContent={'center'}
                  p={{ sm: 2, xl: 0, lg: 0, md: 0 }}
                >
                  {Object.keys(siteMap).map((section) => (
                    <Stack key={section} direction='column' spacing={2}>
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
                            sx={{ '&:hover': { color: theme.fontHoverColor } }}
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
