import { Box, Typography } from '@mui/material'

export default function DividerBetween() {
    return (
        <Box sx={{ width: '2.4%', height: '500px', backgroundColor: '#99CCFF', display: 'flex', flexDirection:'column',color: 'white', alignItems: 'center' }}>
            <Typography sx={{writingMode:'vertical-rl', transform: 'rotate(180deg)', mt:2, mb:4}}>Embark on New Horizons</Typography>
            <Typography sx={{writingMode:'vertical-rl', transform: 'rotate(180deg)', mb:4}}>Discover</Typography>
            <Typography sx={{writingMode:'vertical-rl', transform: 'rotate(180deg)'}}>Wanderlust Starts Here</Typography>
        </Box>
    )
}
