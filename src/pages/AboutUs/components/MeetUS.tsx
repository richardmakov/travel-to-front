import { Box, Typography } from "@mui/material";
import DividerBetween from "./DividerBetween";

export default function MeetUS() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: '1' }}>
                <Box sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
                    <Typography variant='h2' sx={{ fontWeight: 'bold' }}>nice to meet you</Typography>
                    <Typography variant='body1' sx={{ fontWeight: '100',  width: '60%',textAlign:'center' }}>At TravelTO, we're more than just a travel agency—we're your partners in exploration, your guides to the world's wonders, and your companions on the journey of a lifetime. Whether you're a seasoned traveler or embarking on your very first adventure, we're here to make every moment memorable. Let's turn your travel dreams into unforgettable realities. Welcome to the TravelTO family!</Typography>
                </Box>
            </Box>
            <DividerBetween />
            <Box
                sx={{
                    backgroundImage: 'url("https://www.mikencube.co.uk/wp-content/uploads/2022/08/Google-Ads-for-Travel-Agent.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '500px',
                    width: '40%',
                }}
            />
        </Box>
    )
}
