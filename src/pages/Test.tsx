import { Stack, Typography } from '@mui/material';
import TeamContactForm from '../components/TeamContactForm';
import CustomButton from '../components/CustomButton';
import AddIcon from '@mui/icons-material/Add';
const Test = () => {
  return (
    <div>
      <Stack>
        <TeamContactForm />
      </Stack>
      <Stack direction={'row'} spacing={5} m={5}>
        <CustomButton
          size='medium'
          bgStyle='primary'
          hoverStyle='dark'
          startIcon={<AddIcon />}
        >
          <Typography fontWeight={'bold'}>Primary Button</Typography>
        </CustomButton>
        <CustomButton size='small' bgStyle='secondary' hoverStyle='light'>
          <Typography fontSize={'14px'} fontWeight={'bold'}>
            Secondary Button
          </Typography>
        </CustomButton>
        <CustomButton size='small' bgStyle='tertiary' hoverStyle='light'>
          <Typography fontSize={'14px'} fontWeight={'bold'}>
            Tertiary Button
          </Typography>
        </CustomButton>
      </Stack>
    </div>
  );
};

export default Test;
