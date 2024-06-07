import { Box, Typography } from "@mui/material";

export default function MeetUS() {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" sx={{my:{xs:3, sm:0}, fontWeight: 'bold', textAlign: 'center' }}>
                        nice to meet you
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: '100',
                            width: { xs: '80%', sm: '60%' },
                            textAlign: 'center',
                            mt: 2,
                        }}
                    >
                        At TravelTO, we're more than just a travel agency—we're your partners in exploration, your guides to the
                        world's wonders, and your companions on the journey of a lifetime. Whether you're a seasoned traveler or
                        embarking on your very first adventure, we're here to make every moment memorable. Let's turn your travel
                        dreams into unforgettable realities. Welcome to the TravelTO family!
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundImage:
                        'url("https://www.mikencube.co.uk/wp-content/uploads/2022/08/Google-Ads-for-Travel-Agent.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: { xs: '300px', sm: '500px' },
                    width: { xs: '100%', sm: '40%' },
                    mt: { xs: 2, sm: 0 },
                }}
            />
        </Box>
    );
}
