import {
  Box,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MaterialTheme from './MaterialTheme';
import { Icons } from './Icons';

type PersonModalProps = {
  name: string;
  description: string;
  image: string;
  open: boolean;
  onClose: () => void;
};

const FeedbackModal = ({
  name,
  description,
  image,
  open,
  onClose,
}: PersonModalProps) => {
  const theme = MaterialTheme;

  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        transition: 'all',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      BackdropProps={{
        sx: { backgroundColor: 'rgba(213, 210, 210, 0.5)' },
      }}
    >
      <Box
        width={{ xs: '80%', sm: '70%', md: 800 }}
        height={{ xs: 400, md: 400 }}
        position={'relative'}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              transition: 'all',
              color: 'white',
            },
            zIndex: 1,
          }}
        >
          <Icons.Close />
        </IconButton>
        <Grid
          container
          //   spacing={2}
          onClick={onClose}
          bgcolor={theme.palette.background.paper}
          borderRadius={1}
          p={2}
          width={'100%'}
          height={'100%'}
        >
          {/* <IconButton
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
        </IconButton> */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: `url(/images/${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                objectFit: 'cover',
                position: 'relative',
                borderRadius: 1,
              }}
              height={{ xs: '160px', md: '100%' }}
              width={'100%'}
              pr={2}
            ></Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2} pl={2} height={'100%'} justifyContent={'center'}>
              <Typography
                gutterBottom
                variant={isXs ? 'h2' : 'h1'}
                component='div'
              >
                {name}
              </Typography>
              <Typography variant='body1' fontSize={isXs ? '1rem' : '1.2rem'}>
                {description}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
