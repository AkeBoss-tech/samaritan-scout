import {
  IconButton,
  Link,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MaterialTheme from './MaterialTheme';
import { Icons } from './Icons';

type PersonModalProps = {
  title: string;
  name: string;
  description: string;
  image: string;
  link?: string;
  open: boolean;
  onClose: () => void;
};

const PersonModal = ({
  title,
  name,
  description,
  image,
  link,
  open,
  onClose,
}: PersonModalProps) => {
  const theme = MaterialTheme;

  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));

  let imgSize;

  if (isXs) {
    imgSize = '150px';
  } else if (isSm) {
    imgSize = '150px';
  } else if (isMd) {
    imgSize = '200px';
  } else if (isLg) {
    imgSize = '220px';
  } else {
    imgSize = '250px';
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        transition: 'all',
        display: 'flex',
        height: '100%',
        width: '100%',
        overflowY: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        gap={2}
        direction={{
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
        }}
        maxHeight={'85%'}
        width={'100%'}
        marginX={{ xs: '10%', sm: '10%', md: '10%', lg: '18%', xl: '22%' }}
        sx={{ position: 'relative' }}
        onClick={onClose}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              transition: 'all',
              color: 'white',
            },
          }}
        >
          <Icons.Close />
        </IconButton>
        <img
          src={'/images/' + image}
          alt={name}
          style={{
            width: imgSize,
            height: imgSize,
            objectFit: 'cover',
            borderRadius: theme.shape.borderRadius,
            aspectRatio: '1/1',
          }}
        />
        <Stack gap={2}>
          <Typography gutterBottom variant={isXs ? 'h2' : 'h1'} component='div'>
            {name}
          </Typography>
          <Typography variant='h3'>{title}</Typography>
          <Typography variant='body1' fontSize={isXs ? '1rem' : '1.2rem'}>
            {description}
          </Typography>
          <Link
            href={link}
            target='_blank'
            rel='noreferrer'
            style={{
              textDecoration: 'none',
              color: 'inherit',
              marginBottom: '5rem',
            }}
          >
            <Typography
              variant='body1'
              flexWrap={'wrap'}
              fontSize={isXs ? '1rem' : '1.2rem'}
              sx={{
                '&:hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer', // This adds a pointer cursor on hover, which is common for links.
                },
              }}
            >
              {link}
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default PersonModal;
