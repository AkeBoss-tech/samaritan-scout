import { Stack, Typography } from '@mui/material';
import TeamContactForm from '../components/TeamContactForm';
import Button from '../components/button';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
// import GridTag from '../components/GridTag';
const Test = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <div>
      <Stack>
        <TeamContactForm />
      </Stack>
      <Stack direction={'row'} spacing={5} m={5}>
        <Button
          size='medium'
          bgStyle='primary'
          hoverStyle='dark'
          startIcon={<AddIcon />}
        >
          <Typography fontWeight={'bold'}>Primary Button</Typography>
        </Button>
        <Button size='small' bgStyle='secondary' hoverStyle='light'>
          <Typography fontSize={'14px'} fontWeight={'bold'}>
            Secondary Button
          </Typography>
        </Button>
        <Button size='small' bgStyle='tertiary' hoverStyle='light'>
          <Typography fontSize={'14px'} fontWeight={'bold'}>
            Tertiary Button
          </Typography>
        </Button>
      </Stack>
      <Stack>{/* <GridTag /> */}</Stack>
    </div>
  );
};

export default Test;
