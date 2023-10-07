import { Stack, IconButton, Modal, Typography } from '@mui/material';
import MaterialTheme from './MaterialTheme';
import { Icons } from './Icons';

type FeedbackModalProps = {
  title: string;
  content: string;
  image: string;
  open: boolean;
  onClose: () => void;
};

/**
 * FeedbackModal - A modal component for providing feedback.
 *
 * This component displays feedback information including the person's title,
 * content, and an optional image. It can be opened or closed using the `open`
 * prop and the `onClose` function.
 *
 * @component
 * @param props.title - The title of the feedback.
 * @param props.content - The feedback content.
 * @param props.image - File name of the image, the path is under /images/feedback-illustration.
 * @param props.open - A flag to control the modal's visibility from parent component.
 * @param props.onClose - A function to close the modal from modal itself.
 */

const FeedbackModal = ({
  title,
  content,
  image,
  open,
  onClose,
}: FeedbackModalProps) => {
  const theme = MaterialTheme;

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
      <Stack
        width={{ xs: 300, sm: 600, md: 800 }}
        height={{ xs: 500, sm: 300, md: 400 }}
        position={'relative'}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '14px',
            right: '14px',
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

        <Stack
          onClick={onClose}
          bgcolor={theme.palette.background.paper}
          borderRadius={2}
          p={2}
          width={'100%'}
          height={'100%'}
          direction={{
            xs: 'column',
            sm: 'row',
            md: 'row',
            lg: 'row',
            xl: 'row',
          }}
          spacing={2}
        >
          {/* Image Content  */}
          <Stack
            width={{ xs: '100%', sm: '50%', md: '50%', lg: '50%', xl: '50%' }}
            height={{
              xs: '50%',
              sm: '100%',
              md: '100%',
              lg: '100%',
              xl: '100%',
            }}
          >
            <img
              src={`/images/feedback-illustration/${image}`}
              alt=''
              width={'100%'}
              height={'100%'}
              style={{
                borderRadius: theme.shape.borderRadius,
                objectFit: 'cover',
              }}
            ></img>
          </Stack>
          {/* Text Content  */}
          <Stack
            width={{ xs: '100%', sm: '50%', md: '50%', lg: '50%', xl: '50%' }}
            height={'100%'}
            justifyContent={'space-between'}
          >
            <Stack spacing={2} height={'100%'} justifyContent={'center'}>
              <Typography gutterBottom variant='h1' component='div'>
                {title}
              </Typography>
              <Typography variant='body1'>{content}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default FeedbackModal;
