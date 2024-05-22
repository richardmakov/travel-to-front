
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, keyframes } from '@mui/material/styles';

const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const AnimatedBox = styled(Box)({
  display: 'flex',
  whiteSpace: 'nowrap',
  animation: `${scrollText} 30s linear infinite`, // Mueve más lento
  color: 'white', // Texto en blanco
});

const ScrollingText = () => {
  return (
    <Box sx={{ overflow: 'hidden', width: '100%', height: '50px', backgroundColor: '#99CCFF', display: 'flex', alignItems: 'center' }}>
      <AnimatedBox sx={{ width: '200%' }}>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Typography variant='body1' sx={{ mr: 6, ml: 6 }}>Explore Your World Now</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Create Memories, Not Just Trips</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Adventure Awaits</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Journey Beyond Imagination</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Explore Hidden Gems</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Discover New Horizons</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Make Every Trip Special</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Experience the Unseen</Typography>
        </Box>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Typography variant='body1' sx={{ mr: 6}}>Adventures Await</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Discover Hidden Treasures</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Explore New Horizons</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Create Lasting Memories</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Experience the Unseen</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Dive into Culture</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Seek Adventure Everywhere</Typography>
          <Typography variant='body1' sx={{ mr: 6 }}>Travel with Purpose</Typography>
        </Box>
      </AnimatedBox>
    </Box>
  );
};

export default ScrollingText;
