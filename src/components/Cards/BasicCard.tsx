import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function BasicCard() {
    return (
        
        <Card sx={{ height: '20%', mt:12}}>

            <CardContent sx ={{display:'flex', justifyContent:'center', flexDirection:'column'}}>

                <Typography variant="h5" sx={{mt:3, ml:1}} component="div">
                   Contact us:
                </Typography>

                <Typography variant="body2" sx={{ mt: 3, ml: 1, color: '#999999' }}>
                    Call us 666 666 666
                </Typography>
                <Typography variant="body2" sx={{ ml: 1, color: '#999999' }}>
                    New Itenerary: Monday to Friday, From 09:30h to 19:30h .
                </Typography>
                <Typography variant="body2" sx={{mt: 3, mb:3, ml: 1, color: '#999999' }}>
                    Email to get in contact: 
                    <br />
                    <a href="mailto:rmakovs@iesmordefuentes.com">rmakovs@iesmordefuentes.com</a>
                </Typography>
            </CardContent>

            <Box sx={{ width: '100%', backgroundColor: '#CCCCCC', height: '3px' }} />
        </Card>
    );
}