import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import MaterialTheme from './MaterialTheme';
import PersonModal from './PersonModal';

interface PersonCardProps {
  type: 'boardMembers' | 'volunteers';
  title: string;
  name: string;
  description: string;
  image: string;
  link?: string;
}

export default function PersonCard({
  title,
  name,
  description,
  image,
  link,
}: PersonCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const theme = MaterialTheme;

  return (
    <>
      <PersonModal
        open={isModalOpen}
        title={title}
        name={name}
        description={description}
        image={image}
        link={link}
        onClose={closeModal}
      ></PersonModal>
      {/* <Stack
        gap={2}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          cursor: 'pointer',
          bgcolor: isHovered ? '#62B16E' : 'white',
          transition: 'all 0.2s ease-in-out',
          borderRadius: 1.5,
        }}
        onClick={() => {
          openModal();
        }}
        p={1}
        height={'100%'}
      >
        <img
          src={'/images/team-images/' + image}
          alt={name}
          style={{
            width: '100%',
            objectFit: 'cover',
            borderRadius: theme.shape.borderRadius,
            aspectRatio: '1/1',
          }}
        />
        <Stack>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{
              textDecoration: isHovered ? 'underline' : 'none',
              // color: isHovered ? 'primary.light' : 'text.primary',
            }}
          >
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {title}
          </Typography>
        </Stack>
      </Stack> */}

      <Stack
        gap={2}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          cursor: 'pointer',
        }}
        onClick={() => {
          openModal();
        }}
        height={'100%'}
      >
        <img
          src={'/images/team-images/' + image}
          alt={name}
          style={{
            width: '100%',
            objectFit: 'cover',
            borderRadius: theme.shape.borderRadius,
            aspectRatio: '1/1',
          }}
        />
        <Stack>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{
              textDecoration: isHovered ? 'underline' : 'none',
              color: isHovered ? 'primary.light' : 'text.primary',
            }}
          >
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {title}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
