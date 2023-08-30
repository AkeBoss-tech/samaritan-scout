import React, { ReactElement, ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Icon } from '@mui/material';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';

interface VolunteerCardProps {
  cause: string;
  volunteer: string;
  imageSrc: string;
  description: string;
  icon?: ReactElement;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ cause, volunteer, imageSrc, description, icon }) => {
  return (
    <Card sx={{ maxWidth: "100%", height: "100%", borderRadius: "10px" }}>
      <CardActionArea>
        {/* Chip with a word in the top left */}
        <Chip
          icon={icon}
          label={cause}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: '0 0 10px 0',
          }}
          color='primary'
        />
        <CardMedia
          component="img"
          height="300vw"
          image={imageSrc}
          alt={volunteer}
          sx={{  }}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div"  color={'primary'} align='center'>
            {volunteer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VolunteerCard;
