import { Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import MaterialTheme from './MaterialTheme';
import PersonModal from './PersonModal';

interface PersonCardProps {
  type: 'boardMember' | 'volunteer';
  title: string;
  name: string;
  description: string;
  image: string;
  link?: string;
}

export default function PersonCard({
  type,
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
      <Grid
        item
        xs={6}
        sm={4}
        md={3}
        lg={type === 'boardMember' ? 2.4 : 2}
        xl={type === 'boardMember' ? 2.4 : 2}
      >
        <Stack
          gap={2}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            openModal();
          }}
        >
          <img
            src={'/images/' + image}
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
      </Grid>
    </>
  );
}
