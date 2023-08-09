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
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const theme = {
  bgColor: '#273225',
  fontColor: 'white',
  fontHoverColor: '#62B16E',
  iconColor: 'white',
  secondaryFontColor: '#CBCFCB',
};

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
      color={theme.fontColor}
    >
      <Typography variant='body2'>
        {'Copyrights © '}
        {new Date().getFullYear()}{' '}
        <Link
          color='inherit'
          href='https://samaritanscout.org/'
          sx={{
            textDecoration: 'none',
            ':hover': { color: theme.fontColor },
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
            // width: 32,
            color: theme.iconColor,
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
        <Stack spacing={4} py={5}>
          <Box>
            <Grid container spacing={{ xl: 2, lg: 2, md: 2, sm: 5, xs: 2 }}>
              {/* Intro and Donate Button */}
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Stack
                  spacing={{ xl: 3, lg: 3, md: 3, sm: 4, xs: 4 }}
                  alignItems={isXs || isSm ? 'center' : 'flex-start'}
                >
                  <Stack direction='row' spacing={2} alignItems={'center'}>
                    {/* <img
                      src={'/images/lacy-dog-square.jpg'}
                      alt='logo'
                      style={{
                        display: 'block',
                        height: '50px',
                        width: 'auto',
                        borderRadius: '50%',
                      }}
                    /> */}
                    <Typography
                      variant='h5'
                      fontWeight={'bold'}
                      noWrap
                      textTransform={'uppercase'}
                      letterSpacing={2}
                      color={'#FFFDD0'}
                    >
                      Samaritan Scout
                    </Typography>
                  </Stack>
                  <Box
                    width={{
                      xs: '260px',
                      sm: '440px',
                      md: '100%',
                      lg: '100%',
                      xl: '100%',
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
                      color: theme.bgColor,
                      backgroundColor: theme.fontHoverColor,
                      height: '50px',
                      maxWidth: '60%',
                      minWidth: '250px',
                      ':hover': {
                        backgroundColor: theme.fontColor,
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
                        <Typography
                          variant='h6'
                          fontWeight={'bold'}
                          noWrap
                          textTransform={'uppercase'}
                        >
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
                        <Typography
                          variant='h6'
                          fontWeight={'bold'}
                          noWrap
                          textTransform={'uppercase'}
                        >
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
                        <Typography
                          variant='h6'
                          fontWeight={'bold'}
                          noWrap
                          textTransform={'uppercase'}
                        >
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
                    spacing={{ sm: 5, md: 8, lg: 5, xl: 10 }}
                    p={{ sm: 2, md: 0, lg: 0, xl: 0 }}
                    pl={{ sm: 0, md: 0, lg: 10, xl: 15 }}
                  >
                    {/* Volunteer List */}
                    <Stack
                      direction='column'
                      spacing={2}
                      width={{ xl: 170, lg: 170, md: 'auto', sm: 'auto' }}
                      justifyContent={'flex-start'}
                    >
                      <Typography
                        variant='h6'
                        fontWeight={'bold'}
                        noWrap
                        textTransform={'uppercase'}
                      >
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
                    {/* About List */}
                    <Stack
                      direction='column'
                      spacing={2}
                      width={{ xl: 110, lg: 110, md: 'auto', sm: 'auto' }}
                      justifyContent={'flex-start'}
                    >
                      <Typography
                        variant='h6'
                        fontWeight={'bold'}
                        noWrap
                        textTransform={'uppercase'}
                      >
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
                    {/* Learn More List  */}
                    <Stack
                      direction='column'
                      spacing={2}
                      width={{ xl: 170, lg: 170, md: 'auto', sm: 'auto' }}
                      justifyContent={'flex-start'}
                    >
                      <Typography
                        variant='h6'
                        fontWeight={'bold'}
                        noWrap
                        textTransform={'uppercase'}
                      >
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
                )}
              </Grid>
            </Grid>
          </Box>

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
  );
}

export default Footer;
