import { Box, Typography } from '@mui/material'
import BasicCard from './Cards/BasicCard'

import ListAboutUs from './Infos/ListAboutUs'

export default function Footer() {
    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-around', p: { xs: 2, md: 8 } }}>
                <Box sx={{ width: { xs: '100%', md: '30%' }, mb: { xs: 4, md: 0 } }}>
                    <Typography variant="h5" sx={{ mt: 3, ml: 1, color: '#999999' }} component="div">
                        ABOUT US
                    </Typography>
                    <Box sx={{ width: '100%', backgroundColor: '#00A9FF', height: '4px', ml: 1 }} />
                    <Box sx={{ width: '100%', backgroundColor: '#CCCCCC', height: '2px', ml: 1 }} />
                    <ListAboutUs />
                </Box>

                <BasicCard />
            </Box>

            <Box sx={{ backgroundColor: '#f8fafe', p: 4, m: 'auto', textAlign: 'center' }}>
                <img src="https://d1hkxmgwhmmdhs.cloudfront.net/dist/assets/img/graphics/footer/footer-images-cards.png" alt="" style={{ maxWidth: '100%' }} />
            </Box>

            <Box sx={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/logo2.png" alt="logo" style={{ width: '150px', height: '150px', maxWidth: '100%' }} />
            </Box>
            <Box sx={{ backgroundColor: '#333', color: '#FFF', textAlign: 'center', p: 2 }}>
                <Typography variant="body1" sx={{ color: '#999999', my: 2 }}>© TravelTO. developed by Richard Makovs as a final degree project</Typography>
            </Box>
        </Box>

    )
}
